import React from "react";
import ProfilePic from "../../public/PranayPicture.png";
import ProfileLogo from "../../public/PranayLogo.png";

const Hero = () => {
  return (
    <header className="hero">
      <nav className="nav">
        <img className="logo-img" src={ProfileLogo} alt="Pranay's logo"></img>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-content">
        <img src={ProfilePic} alt="Joe Doe" className="profile-img" />
        <h1>Hi, I'm Pranay</h1>
        <p>Software Engineer | Full Stack Developer | Problem Solver</p>
        <a className="btn" href="#projects">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Hero;
