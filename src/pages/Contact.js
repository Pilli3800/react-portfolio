import React from "react";
import "../pages/Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-form-container">
          <form action="https://formspree.io/f/xzboqgon" method="POST">
            <label>
              My <span>name</span> is{" "}
              <input type="name" required="required" name="name"></input>
            </label>
            <label>{" "}
              and my <span>email</span> is{" "}
              <input type="email" required="required" name="email"></input>
            </label>
            <label>
            {" "}I would like you to be part of a project. <br></br>
              Here is a brief description of what it is about <br></br>
              <textarea name="message" required="required"></textarea>
            </label>
            <br></br>
            <button className="aboutme-button" type="submit">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> Send</span>
            </button>
          </form>
        </div>
        <div className="contact-iconsocial-container">
          <a href="https://github.com/Pilli3800" target="_blank" rel="noreferrer">
            <img className="fa-brands fa-github iconsocial" alt="example" />
          </a>
          <a href="https://www.linkedin.com/in/luis-alonso-alvarez-aguilar-420b24144/" target="_blank" rel="noreferrer">
            <img className="fa-brands fa-linkedin iconsocial" alt="example" />
          </a>
        </div>
      </div>
    </section>
  );
};
