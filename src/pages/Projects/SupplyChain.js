import React from "react";

const supplyChainProjects = [
  {
    title: "An Avocado Toast: A Supply Chain Analysis",
    description:
      "In 'What's in an Avocado Toast: A Supply Chain Analysis,' I conducted a comprehensive supply chain investigation focusing on three key ingredients: avocados, olive oil, and sourdough bread. Utilizing the Open Food Facts database, I employed data manipulation techniques to filter and analyze relevant food items based on their categories and origins. The project's objective was to identify the most common countries of origin for these ingredients. By subsetting and processing large datasets, I extracted valuable insights about the global sourcing of these essential elements in the popular dish. This analysis not only showcased my data handling skills but also provided actionable supply chain insights.",
    github_link:
      "https://github.com/shafikul-islam/Avocado-Toast-A-Supply-Chain-Analysis",
  },
  {
    title: "Navigating Cost Savings in Medical Device Supply Chain",
    description:
      "This project addresses a scenario where a 2.3% Medical Device Excise Tax threatens profitability. It focuses on applying strategic supply chain management to identify cost-saving opportunities and ensure operational efficiency within the industry. This project serves as a critical component of the Supply Chain Management specialization offered by Coursera, emphasizing real-world applications and strategic problem-solving in a dynamic landscape.",
    case_file:
      "https://drive.google.com/file/d/1oA4YbkMfLzjRELZEgEUolCG3Y39c5Igl/view?usp=drive_link",
    solution_file:
      "https://drive.google.com/file/d/10qiPrhyWRBp-hMiahcXEzoOjLJOs0a5O/view?usp=drive_link",
    certification:
      "https://coursera.org/share/87631c51a442b4f6ad8848861b9433cc",
  },
];

const SupplyChain = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {supplyChainProjects.map((project, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>

            {/* GitHub Link for first project only */}
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

            {/* Links for second project */}
            {project.case_file && (
              <a
                href={project.case_file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn btn-sm"
              >
                Case File
              </a>
            )}
            {project.solution_file && (
              <a
                href={project.solution_file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn btn-sm"
              >
                Solution File
              </a>
            )}
            {project.certification && (
              <a
                href={project.certification}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn btn-sm"
              >
                Certification
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplyChain;
