import React from "react";
import { Link, NavLink } from "react-router-dom";

const menuItems = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li tabIndex={0}>
      <NavLink to="/publications">Publications</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Research Projects</NavLink>
    </li>
    <li>
      <Link
        to="/assets/cv/Shafikul_Islam_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
    </li>
  </>
);
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex-wrap sticky z-10 top-0">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Shafikul Islam / শফিকুল ইসলাম
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-3">
          {menuItems}
        </ul>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
