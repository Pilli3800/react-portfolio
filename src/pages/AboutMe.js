import React from "react";
import './AboutMe.css'
import HTML from "../img/html.png";
import CSS3 from "../img/css-3.png";
import JS from "../img/java-script.png";
import PYTHON from "../img/python.png";
import SASS from "../img/sass.png";
import REACT from "../img/react.png";
import PHOTO from "../img/3323619.jpg";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div class="aboutme-container">
        <div class="aboutme-text-container">
          <h2>About Me</h2>
          <p>
            I am Luis, a 21 year old Systems Engineering Student and Full Stack
            Developer, living in Arequipa, Perú. I have an eye for detail and a
            passion for what I do. I am ready for any challenge, and constantly
            learning new technologies.
          </p>
          <div class="aboutme-button-container">
            <a
              href="https://drive.google.com/file/d/15UopB1aRdTFDgzkr1y0N-lDNePD1ywMZ/view?usp=sharing
                        "
            >
              <button class="aboutme-button">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Download Resume</span>
              </button>
            </a>
          </div>
          <div class="aboutme-icons-container">
            <img class="icon" src={HTML} alt=""></img>
            <img class="icon" src={CSS3} alt="css3"></img>
            <img class="icon" src={JS} alt=""></img>
            <img class="icon" src={REACT}  alt=""></img>
            <img class="icon" src={PYTHON}  alt=""></img>
            <img class="icon" src={SASS}  alt=""></img>
          </div>
        </div>
        <div class="aboutme-img-container">
          <img class="aboutme-img" src={PHOTO} alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
