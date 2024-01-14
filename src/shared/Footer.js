import React from "react";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="flex justify-center items-center">
        <p className="text-white mr-4">Connect with me:</p>
        <a
          href="https://github.com/shafikul-islam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-shafikul-islam-sohan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.facebook.com/mdshafikulislam.sohan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 hover:text-gray-500"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
