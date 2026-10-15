#!/usr/bin/env python3
"""Fetch citation metrics from the public Google Scholar profile into _data/scholar.yml.

Google Scholar has no official API. Two sources are supported:
  1. SearchApi (https://www.searchapi.io), used when the SEARCHAPI_KEY environment
     variable is set. This is what the GitHub workflow uses, because Scholar blocks
     requests from GitHub's servers. One run uses one search credit.
  2. The public profile page, read directly. Works from a home connection.
If the request fails or the response looks wrong, the script exits without
touching the existing data file, so the site keeps the last good numbers.

Usage: python3 _tools/update_scholar.py            (direct)
       SEARCHAPI_KEY=... python3 _tools/update_scholar.py
"""
import datetime as dt
import html
import json
import os
import urllib.parse
import pathlib
import re
import sys
import urllib.request

USER = "A8KOQBEAAAAJ"
URL = f"https://scholar.google.com/citations?user={USER}&hl=en&cstart=0&pagesize=100&sortby=citedby"
DATA = pathlib.Path(__file__).resolve().parent.parent / "_data"
OUT = DATA / "scholar.yml"
PUBS = DATA / "publications.yml"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"


def fetch() -> str:
    req = urllib.request.Request(URL, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def parse(page: str) -> dict:
    stats = [int(x) for x in re.findall(r'class="gsc_rsb_std">(\d+)<', page)]
    if len(stats) < 6:
        raise ValueError("metrics table not found")
    years = [int(y) for y in re.findall(r'class="gsc_g_t"[^>]*>(\d{4})<', page)]
    # Bars carry their year in the style "z-index" order; read value and the year label by position.
    bars = re.findall(r'<a[^>]*class="gsc_g_a"[^>]*style="[^"]*z-index:(\d+)[^"]*"[^>]*><span class="gsc_g_al">(\d+)</span>', page)
    per_year = {y: 0 for y in years}
    if bars and years:
        # z-index 1 is the newest year, 2 the year before, and so on.
        for z, v in bars:
            idx = len(years) - int(z)
            if 0 <= idx < len(years):
                per_year[years[idx]] = int(v)
    papers = []
    for row in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, re.S):
        t = re.search(r'class="gsc_a_at"[^>]*>(.*?)</a>', row, re.S)
        c = re.search(r'class="gsc_a_ac gs_ibl"[^>]*>(\d*)</a>', row)
        y = re.search(r'class="gsc_a_h gsc_a_hc gs_ibl">(\d*)<', row)
        if t:
            papers.append({
                "title": html.unescape(re.sub(r"<[^>]+>", "", t.group(1))).strip(),
                "cites": int(c.group(1)) if c and c.group(1) else 0,
                "year": int(y.group(1)) if y and y.group(1) else None,
            })
    return {
        "updated": dt.date.today().isoformat(),
        "profile": f"https://scholar.google.com/citations?user={USER}",
        "citations": stats[0], "citations_recent": stats[1],
        "h_index": stats[2], "h_index_recent": stats[3],
        "i10_index": stats[4], "i10_index_recent": stats[5],
        "per_year": [{"year": y, "cites": per_year[y]} for y in sorted(per_year)],
        "papers": papers,
    }


def norm(t: str) -> str:
    return re.sub(r"[^a-z0-9]", "", t.lower())


def match_ids(papers: list) -> dict:
    """Map publication ids in _data/publications.yml to Scholar citation counts by title."""
    text = PUBS.read_text(encoding="utf-8")
    pubs = re.findall(r"^- id: (\S+)\n(?:  .*\n)*?  title: (.+)$", text, re.M)
    out = {}
    for pid, title in pubs:
        key = norm(title.strip().strip("'\""))[:45]
        for p in papers:
            if norm(p["title"])[:45] == key and p["cites"] > 0:
                out[pid] = max(out.get(pid, 0), p["cites"])
    return out


def _num(v):
    """SearchApi values may be ints, numeric strings, or {"value": n} objects."""
    if isinstance(v, dict):
        v = v.get("value", v.get("all", v.get("total")))
    try:
        return int(str(v).replace(",", ""))
    except (TypeError, ValueError):
        return 0


def fetch_searchapi(key: str) -> dict:
    # Default sort is by citation count; the first page holds the most-cited papers.
    q = urllib.parse.urlencode({"engine": "google_scholar_author", "author_id": USER, "hl": "en", "api_key": key})
    req = urllib.request.Request("https://www.searchapi.io/api/v1/search?" + q, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        d = json.load(r)
    if d.get("error"):
        raise ValueError(f"SearchApi error: {d['error']}")
    cb = d.get("cited_by") or {}
    metrics = {}
    table = cb.get("table")
    if isinstance(table, dict):  # {"headers": [...], "rows": [["Citations", all, since], ...]}
        for row in table.get("rows") or []:
            if isinstance(row, list) and len(row) >= 2:
                metrics[norm(str(row[0]))] = (_num(row[1]), _num(row[2]) if len(row) > 2 else _num(row[1]))
    elif isinstance(table, list):  # [{"citations": {"all": n, "since_...": m}}, ...]
        for row in table:
            for k, v in (row.items() if isinstance(row, dict) else []):
                allv = _num(v.get("all")) if isinstance(v, dict) else _num(v)
                rec = next((_num(x) for kk, x in v.items() if kk.startswith("since")), allv) if isinstance(v, dict) else allv
                metrics[norm(k)] = (allv, rec)
    c, cr = metrics.get("citations", (0, 0))
    h, hr = metrics.get("hindex", (0, 0))
    i, ir = metrics.get("i10index", (0, 0))
    if c <= 0:
        shape = {k: type(v).__name__ for k, v in cb.items()}
        raise ValueError(f"SearchApi response had no citation total (cited_by keys: {shape})")
    hist = cb.get("histogram") or cb.get("graph") or []
    per_year = sorted(({"year": _num(g.get("year")), "cites": _num(g.get("cites", g.get("citations")))} for g in hist if isinstance(g, dict)), key=lambda x: x["year"])
    papers = [{"title": (a.get("title") or "").strip(), "cites": _num(a.get("cited_by")),
               "year": _num(a.get("year")) or None} for a in d.get("articles") or [] if isinstance(a, dict)]
    return {
        "updated": dt.date.today().isoformat(),
        "profile": f"https://scholar.google.com/citations?user={USER}",
        "citations": c, "citations_recent": cr, "h_index": h, "h_index_recent": hr,
        "i10_index": i, "i10_index_recent": ir, "per_year": per_year, "papers": papers,
    }


def main() -> int:
    key = os.environ.get("SEARCHAPI_KEY", "").strip()
    try:
        data = fetch_searchapi(key) if key else parse(fetch())
    except Exception as e:  # keep the last good file
        print(f"Scholar update skipped: {e}", file=sys.stderr)
        return 0
    lines = ["# Generated by _tools/update_scholar.py from the public Google Scholar profile. Do not edit by hand."]
    for k in ("updated", "profile", "citations", "citations_recent", "h_index", "h_index_recent", "i10_index", "i10_index_recent"):
        lines.append(f"{k}: {json.dumps(data[k])}")
    lines.append("per_year:")
    lines += [f"  - {{ year: {p['year']}, cites: {p['cites']} }}" for p in data["per_year"]]
    by_id = match_ids(data["papers"])
    lines.append("by_id:")
    lines += [f"  {k}: {v}" for k, v in sorted(by_id.items())]
    lines.append("papers:")
    for p in data["papers"]:
        lines.append(f"  - title: {json.dumps(p['title'], ensure_ascii=False)}")
        lines.append(f"    cites: {p['cites']}")
        lines.append(f"    year: {json.dumps(p['year'])}")
    new = "\n".join(lines) + "\n"
    old = OUT.read_text(encoding="utf-8") if OUT.exists() else ""
    # Ignore the date line when deciding whether anything changed.
    strip = lambda s: re.sub(r"^updated:.*$", "", s, flags=re.M)
    if strip(new) == strip(old):
        print("No change in Scholar metrics.")
        return 0
    OUT.write_text(new, encoding="utf-8")
    print(f"Updated {OUT.name}: {data['citations']} citations, h={data['h_index']}, i10={data['i10_index']}, {len(data['papers'])} papers")
    return 0


if __name__ == "__main__":
    sys.exit(main())
