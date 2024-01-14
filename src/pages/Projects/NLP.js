import React from "react";

const naturalLanguageProcessingProjects = [
  {
    title: "Machine Learning Trends Analysis: NIPS Papers (1987-2017)",
    description:
      "Uncovering the evolution of machine learning through an analysis of NIPS papers using NLP and topic modeling, showcasing proficiency in data analysis, NLP, and machine learning methodologies. Completed as a hands-on project on DataCamp.",
    github_link:
      "https://github.com/shafikul-islam/Machine-Learning-Trends-Analysis-NIPS-Papers-1987-2017-",
  },
  {
    title: "Tweet Classification: Trump vs. Trudeau",
    description:
      "Leveraging NLP techniques to differentiate tweets from Donald Trump and Justin Trudeau, employing Multinomial Naive Bayes and LinearSVC models to capture unique linguistic patterns. Offers insights into distinct tweeting styles, showcasing proficiency in NLP, machine learning, and data analysis.",
    github_link:
      "https://github.com/shafikul-islam/Tweet-classification-Trump-vs-Trudeau",
  },
];
const NLP = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {naturalLanguageProcessingProjects.map((project, index) => (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default NLP;
