import React from "react";
import { Outlet } from "react-router-dom";
import ProjectNestedNavbar from "../shared/ProjectNestedNavbar";

const ProjectLayout = () => {
  return (
    <div>
      <ProjectNestedNavbar></ProjectNestedNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ProjectLayout;
