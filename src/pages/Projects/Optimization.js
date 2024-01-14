import React from "react";

const optimizationProjects = [
  {
    title: "Operations Research Model, Algorithm, and Applications",
    description:
      'The "Operations Research Model, Algorithm, and Applications" project is a comprehensive academic endeavor that encapsulates the essence of Operations Research (OR) through a structured curriculum offered by Coursera. The project is divided into three distinct courses...',
    subProjects: [
      {
        title: "Operations Research (1): Model and Applications",
        description:
          "This introductory course lays the groundwork by focusing on the formulation of mathematical models for optimization problems in various business contexts...",
      },
      {
        title: "Operations Research (2): Optimization Algorithms",
        description:
          "Building on the foundational knowledge, the second course delves deeper into the realm of deterministic optimization techniques...",
      },
      {
        title: "Operations Research (3): Theory",
        description:
          "The final installment of the series delves into the theoretical underpinnings of OR. Topics such as linear programming duality, sensitivity analysis, network flow models, convex analysis, and Lagrangian duality are meticulously explored...",
      },
    ],
    github_link:
      "https://github.com/shafikul-islam/Operations-Research-Course-National-Taiwan-University-",
  },
  {
    title: "Netflow Optimization using Gurobi Python API",
    description:
      'The "Netflow Optimization Using Gurobi Python API" project focuses on solving a complex netflow optimization problem related to the production and transportation logistics of two distinct products...',
    github_link:
      "https://github.com/shafikul-islam/Net-flow-Problem-using-Gurobi-Python",
  },
  {
    title: "Solving Convex Optimization Problems Using CVXPY",
    description:
      'The "Solving Convex Optimization Problems Using CVXPY" project employs the CVXPY library in Python to tackle two distinct optimization challenges. First, it addresses the Cheapest Network Flow Problem, aiming to optimize supply distribution across a network while minimizing costs and respecting capacity constraints...',
    github_link: "https://github.com/shafikul-islam/CVXPY_Project",
  },
];

const Optimization = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {optimizationProjects.map((project, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>

            {/* GitHub Link */}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn btn-sm"
              >
                View on GitHub
              </a>
            )}

            {/* Sub-Projects */}
            {project.subProjects && (
              <>
                <h3 className="mt-4 text-lg font-bold">Sub-Projects:</h3>
                {project.subProjects.map((subProject, i) => (
                  <div key={i} className="mt-2">
                    <h4 className="mb-2">{subProject.title}</h4>
                    <p className="text-sm">{subProject.description}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Optimization;
