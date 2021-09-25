import React from "react";
import "./Home.css";
import Typical from "react-typical";

function Home() {
  return (
    <div id="home-div">
      <p className="paragraph" id="hi-there">
        Hiya, I am
      </p>
      <h1 className="h1">Matthew Fan</h1>
      <h2 className="h2">
        I am a{" "}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Software Developer",
            3000,
            "Data Engineer",
            3000,
            "Gamer",
            3000,
            "Translator",
            3000,
            "Hiker",
            3000,
          ]}
        />
      </h2>
      <p className="paragraph" id="intro">
        I am a passionate Software Developer major student. Interst in back-end
        development and data engineering.
      </p>
      <p className="paragraph">
        Currently working on API development for a financial application.
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
