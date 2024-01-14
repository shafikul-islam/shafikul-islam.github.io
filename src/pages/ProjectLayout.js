import React from "react";
import { Outlet } from "react-router-dom";
import ProjectNestedNavbar from "../shared/ProjectNestedNavbar";

const ProjectLayout = () => {
  return (
    <div>
      <h1 className="text-2xl m-5">
        I am currently immersed in several research projects. You can navigate
        through different kinds of projects. My projects are listed below
        according to their types. Please click on the links to see the projects.
      </h1>

      <ProjectNestedNavbar></ProjectNestedNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectLayout;
