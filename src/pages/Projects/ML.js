import React from "react";

const machineLearningProjects = [
  {
    title: "Classify Song Genres from Audio Data",
    description: `In this project, I ventured into the captivating realm of music genre classification. By leveraging the scikit-learn library, I implemented supervised learning techniques to categorize songs into either 'Hip-Hop' or 'Rock' genres. This exploration involved meticulous data preprocessing, insightful exploratory data visualization, and dimensionality reduction using powerful techniques like Principal Component Analysis (PCA). Through an iterative process of model training and evaluation, I experimented with decision trees and logistic regression to achieve optimal genre classification. This project serves as a testament to my proficiency in machine learning, data preprocessing, and dimensionality reduction, showcasing the practical application of advanced techniques to real-world music datasets.`,
    github_link: "https://github.com/shafikul-islam/Song-Genres-Classification",
  },
];

const ML = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {machineLearningProjects.map((project, index) => (
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

export default ML;
