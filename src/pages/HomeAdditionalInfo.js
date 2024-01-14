import React from "react";

const HomeAdditionalInfo = () => {
  return (
    <div className="flex flex-col gap-y-10 my-10 w-1/2 d-paragraph mb-5">
      {/* Ongoing Research Projects */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Ongoing Research Projects</h2>
        <ul className="space-y-2">
          <div>
            <li>
              Exploring the integration of Graph Neural Networks (GNN) and
              supply chain dynamics to address complex optimization challenges
              in the supply chain.
            </li>
          </div>
          <div>
            <li>
              Investigating the application of GNN in solving supply chain
              optimization problems, aiming to develop an integrated solver.
            </li>
          </div>
          <div>
            <li>
              Analyzing the challenges in establishing smart textiles in the
              ready-made garments industry, utilizing IV Type 2 Damatel
              methodology to identify correlations and hurdles.
            </li>
          </div>
        </ul>
      </div>

      {/* Hobbies and Interests */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Hobbies and Interests</h2>
        <ul className="list-none space-y-2">
          <div>
            <li>
              Beyond the academic realm, I am an avid reader, delving into a
              wide range of topics from politics to nature and self-help.
            </li>
          </div>
          <div>
            <li>
              Coding and problem-solving are not just academic pursuits for me;
              they are also my favorite pastimes.
            </li>
          </div>
          <div>
            <li>
              I thrive on teamwork, enjoying team sports such as cricket and
              football.
            </li>
          </div>
        </ul>
      </div>

      {/* Recent News */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Recent News</h2>
        <ul className="list-none space-y-2">
          <div>
            <li>
              <span className="font-bold">December 12, 2023:</span> Our paper
              "Supplygraph: A benchmark dataset for supply chain planning using
              graph neural networks" got accepted in Graphs and More Complex
              Structures for Learning and Reasoning workshop, AAAI 2024.
            </li>
          </div>
          <div>
            <li>
              <span className="font-bold">December 4, 2023:</span> Successfully
              completed the GUROBI Training: Optimization 201 for Data
              Scientists.
              <p>
                <span className="font-bold">Description of training</span> :
                Opti201 is tailored for data scientists, machine learning
                enthusiasts, analysts, academics and professionals seeking to
                elevate their skills by learning to build more complex
                mathematical optimization models and better understanding how
                optimization integrates with machine learning <br />
                <a
                  href="/assets/cv/certificate.pdf"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate of Completion here.
                </a>
              </p>
            </li>
          </div>
          <div>
            <li>
              <span className="font-bold">November 3, 2023:</span>{" "}
              <a
                className="text-blue-500"
                href="https://arxiv.org/abs/2311.00983"
              >
                Preprint of our paper "Optimizing Inventory Routing: A
                Decision-Focused Learning Approach using Neural Networks" is
                available here
              </a>
            </li>
          </div>
          <div>
            <li>
              <span className="font-bold"> June 2023:</span> Co-founded the{" "}
              <a href="https://ciol-sust.github.io/" className="text-blue-500">
                Computational Intelligence and Operations Lab (CIOL):
              </a>
            </li>
          </div>
          <div>
            <li>
              Successfully completed all assignments and exams of three{" "}
              <a
                href="https://github.com/shafikul-islam/Operations-Research-Course-National-Taiwan-University-"
                className="text-blue-500"
              >
                Operations Research courses on Coursera
              </a>
            </li>
          </div>
        </ul>
      </div>

      {/* Experience */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-xl font-bold">Experience</h2>
        <ul className="list-none space-y-2">
          <div>
            <li>
              <span className="font-bold">July 2023 - Present:</span> Founding
              Member and Director, CIOL Lab:{" "}
              <a className="text-blue-500" href="https://ciol-sust.github.io/">
                Computational Intelligence and Operations Lab
              </a>
            </li>
          </div>
          <div>
            <li>
              <span className="font-bold">January 2023 - Present:</span>{" "}
              Research Assistant: Utilizing Prescriptive Analytics for
              Developing an Optimal Preparatory Leave Schedule, Project by
              University Research Centre, SUST.
            </li>
          </div>
          <div>
            <li>
              <span className="font-bold">June 2023 - December 2023:</span>{" "}
              Research Assistant: Project: Development of an Automated
              Timetabling Software Using Genetic Algorithm, Project funded by
              University Research Centre Sust.
            </li>
          </div>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomeAdditionalInfo;
