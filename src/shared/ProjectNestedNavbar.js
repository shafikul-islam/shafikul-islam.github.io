import React from "react";
import { NavLink, Link } from "react-router-dom";

const menuItems = (
  <>
    <li>
      <NavLink to="academic">Academic</NavLink>
    </li>
    <li tabIndex={0}>
      <NavLink to="optimization">Optimization </NavLink>
    </li>
    <li>
      <NavLink to="supply-chain">Supply Chain Management </NavLink>
    </li>
    <li>
      <NavLink to="data-science">Data Science </NavLink>
    </li>
    <li>
      <NavLink to="machine-learning">Machine Learning </NavLink>
    </li>
    <li>
      <NavLink to="natural-language-processing">
        Natural Language processing
      </NavLink>
    </li>
  </>
);

const ProjectNestedNavbar = () => {
  return (
    <div className="navbar bg-base-100 flex-wrap sticky z-10 top-0">
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

export default ProjectNestedNavbar;
