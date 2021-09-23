import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div id="home-div">
      <p className="one-second-animation" id="hi-there">
        Hiya, I am
      </p>
      <h1 className="h1 three-second-animation">Matthew Fan</h1>
      <h2 className="h2 five-second-animation">I am a Software Developer</h2>
      <Link to="/cv">
        <p className="paragraph seven-second-animation" id="intro">
          I have experience in Python, React.JS, Java, SQL...
        </p>
      </Link>
      <p className="nine-second-animation">
        This website was being constructed with React.JS and hosted on Github
        Pages
      </p>
      <a href={`mailto:matthewenzo@icloud.com`}>
        <button className="button" id="contact-me">
          Contact Me
        </button>
      </a>
    </div>
  );
}

export default Home;
