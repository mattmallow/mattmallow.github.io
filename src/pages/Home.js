import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div id="home-div">
      <p>Hiya, I am</p>
      <h1>Matthew Fan</h1>
      <h2>I am a Software Developer</h2>
      <Link to="/cv">
        <p className="paragraph"></p>
      </Link>

      <a href={`mailto:matthewenzo@icloud.com`}>
        <button className="button" id="contact-me">
          Contact Me
        </button>
      </a>
    </div>
  );
};
