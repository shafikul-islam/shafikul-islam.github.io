import React from "react";
import sohan from "../assets/images/sohanImage.png";
import "../styles/description_center.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faCode,
  faBookOpen,
  faDatabase,
  faCopyright
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHackerrank,
  faKaggle,
  faLinkedin,
  faResearchgate,
  faOpera
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero min-h-screen description-center">
      <div className="hero-content flex-col justify-between lg:flex-row">
        <img
          src={sohan}
          alt="sohan"
          className="max-w-sm rounded-3xl shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">MD SHAFIKUL ISLAM</h1>
          <p className="text-xl">
            BSC in INDUSTRIAL AND PRODUCTION ENGINEERING
          </p>
          <br />
          <p>SHAHJALAL UNIVERSITY OF SCIENCE AND TECHNOLOGY</p>
          <br />
          <p>
            <small>
              <FontAwesomeIcon icon={faPhone} /> 01760329288
            </small>
          </p>
          <p>
            <small>
              <FontAwesomeIcon icon={faEnvelope} /> Shafikul37@student.sust.edu
            </small>
          </p>
          <p>
            <small>
              <FontAwesomeIcon icon={faLocationPin} /> DHAKA, BANGLADESH
            </small>
          </p>
          <br />
          <div>
            <a
              className="m-3"
              href="https://www.linkedin.com/in/md-shafikul-islam-sohan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="m-3"
              href="https://github.com/shafikul-islam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="m-3"
              href="https://www.researchgate.net/profile/Md-Islam-2168"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faResearchgate} />
            </a>
            <a
              className="m-3"
              href="https://www.kaggle.com/mdshafikulislamsohan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faKaggle} />
            </a>
            <a
              className="m-3"
              href="https://www.hackerrank.com/sohan11807044"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
            <a
                className="m-3"
                href="https://www.semanticscholar.org/author/MD-Shafikul-Islam/2244783507"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faBookOpen} />
              </a>
              <a
                className="m-3"
                href="https://leetcode.com/shafikul_islam-sohan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <FontAwesomeIcon icon={faCode} />
              </a>
              <a
                className="m-3"
                href="https://openreview.net/profile?id=~MD_Shafikul_Islam1"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <FontAwesomeIcon icon={faOpera} />
              </a>
              <a
                className="m-3"
                href="https://www.datacamp.com/portfolio/sohan11807044"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <FontAwesomeIcon icon={faDatabase} />
              </a>
              <a
                className="m-3"
                href="https://www.coursera.org/user/c39540d8b39a85c8e2a859d9cbb5d787"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faCopyright} />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
