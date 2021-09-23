import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div id="home-div">
      <p className="paragraph one-second-animation" id="hi-there">
        Hiya, I am
      </p>
      <h1 className="h1 three-second-animation">Matthew Fan</h1>
      <h2 className="h2 five-second-animation">
        I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Software Developer",
            2000,
            "Student",
            2000,
            "Gamer",
            2000,
            "Interpreter",
            2000,
          ]}
        />
      </h2>
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
