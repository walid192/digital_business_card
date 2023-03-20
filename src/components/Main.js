import React from "react";
import "../Styles/mainComponent.css";

import email from '../Images/email.png';
import linkedin from '../Images/Linkedin.png';







function Main() {
  return (
    <div className="cardBody">
      <div className="info">
        <div className="Name">Walid Sboui</div>
        <div className="job">Frontend Developer</div>
        <div className="website">walidsboui.website</div>
      </div>
      <div className="buttons">
        <button className="emailButton" type="button"> <img src={email} alt="email_logo" /> Email</button>
        <button className="LinkedInButton" type="button"> <img src={linkedin} alt="linkedin_logo" /> Linkedin</button>
      </div>
      <div className="about">
        <h1 className="title">
          About
        </h1>
        <p className="paragraphe">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="interests">
        <h1 className="title">Intersets</h1>
        <p className="paragraphe">
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
        </p>
      </div>
    </div>
  );
}

export default Main;