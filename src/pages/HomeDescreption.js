import React from "react";
import "../styles/description_center.css";

const HomeDescreption = () => {
  return (
    <div className="w-1/2 d-paragraph mb-10 ">
      <div className="mb-5">
        <p>
          Hello there! I am currently an undergraduate student pursuing a degree
          in Industrial and Production Engineering at
          <a
            className="text-blue-500"
            href="https://www.sust.edu/d/ipe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Shahjalal University of Science & Technology
          </a>
          . Alongside my studies, I am actively engaged as a research assistant
          in the
          <a
            className="text-blue-500"
            href="https://ciol-sust.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Computational Intelligence and Operations Lab - CIOL.
          </a>{" "}
        </p>
      </div>
      <div className="mb-5">
        <p>
          I am eagerly seeking opportunities to embark on a Ph.D. journey, with
          a keen interest in the intersection of Optimization and Machine
          Learning. My primary goal is to leverage the synergy between these
          domains to drive groundbreaking advancements in business
          organizations.
        </p>
      </div>
      <div className="mb-5">
        <p>
          As part of my undergraduate thesis, under the guidance of
          <a
            className="text-blue-500"
            href="https://www.sust.edu/d/ipe/faculty-profile-detail/310"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Dr Abul Mukid Mohammad Mukaddes
          </a>
          , I am focusing on developing optimal schedules for preparatory leave
          using prescriptive analytics.
        </p>
      </div>
      <div>
        <p>
          In an effort to cultivate a research-oriented environment in my
          department, I have initiated a lab named{" "}
          <a
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ciol-sust.github.io/"
          >
            Computational Intelligence and Operations Lab - CIOL
          </a>{" "}
          The vision behind this initiative is to bridge the gap between
          industrial engineering and cutting-edge technologies like AI and
          optimization. We aim not only to learn ourselves but also to mentor
          and guide fellow students in this exciting field.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomeDescreption;
