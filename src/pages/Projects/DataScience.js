import React from "react";

const dataScienceProjects = [
  {
    title: "Tour de France Data Visualization Project using Tableau",
    description:
      "Visualizes the Tour de France race using Tableau to create charts and interactive dashboards, telling a comprehensive story about the race.",
    github_link:
      "https://github.com/shafikul-islam/Tour-de-France-Data-Visualization-Project-using-Tableau",
    certificate: "https://coursera.org/share/b9c306b7f1e90489b9b5125e3d5e3c3f",
  },
  {
    title: "COVID19 and Global Happiness Index: A Data-Driven Analysis",
    description:
      "Investigates the relationship between COVID19 and happiness levels using data analysis and visualization techniques.",
    github_link:
      "https://github.com/shafikul-islam/COVID19-and-Global-Happiness-Index-A-Data-Driven-Analysis",
    certificate: "https://coursera.org/share/ae48081dea3cbc735661c4d6a41167be",
  },
  {
    title: "Web Scraping & Basketball Data Analysis",
    description:
      "Showcases web scraping and data analysis skills using Python to extract and analyze basketball statistics.",
    github_link:
      "https://github.com/shafikul-islam/My-Programming-Courses/tree/main/Python%20For%20Data%20Science%20by%20IBM",
    certificate:
      "https://courses.edx.org/certificates/ee8b8440469546d8bf1162b8790611cb?_gl=1*ak6vqg*_ga*Njg0NDg0OS4xNzAzODcyNzU0*_ga_D3KS4KMDT0*MTcwMzg3Mjc1Ni4xLjEuMTcwMzg3Mjg1NC4zMy4wLjA",
  },
  {
    title: "Super Bowl Data Analysis",
    description:
      "Provides a comprehensive analysis of the Super Bowl, exploring game outcomes, TV viewership, and halftime shows.",
    github_link:
      "https://github.com/shafikul-islam/Super-Bowl-Analysis-A-Data-Camp-Project/tree/main/Analyzing%20TV%20Data",
  },
  {
    title: "Image Loading and Preprocessing for Bee Classification",
    description:
      "Explores image preprocessing using Pillow to distinguish honeybees from bumble bees for data collection and potential machine learning applications.",
    github_link:
      "https://github.com/shafikul-islam/Image-Loading-and-Preprocessing-using-Pillow",
  },
];
const DataScience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {dataScienceProjects.map((project, index) => (
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

            {/* Certificate Link (if available) */}
            {project.certificate && (
              <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn btn-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataScience;
