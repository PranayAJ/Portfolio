import React from "react";
import ProfilePic from "../../public/PranayPicture.png";
import ProfileLogo from "../../public/PranayLogo.png";

const Hero = () => {
  return (
    <>
      <header className="hero highlight">
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
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot"></span>
              <span>Software Engineer</span>
            </div>

            <h1>
              <span>Hi, I’m Pranay</span>
            </h1>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View My Work
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-frame">
              <img src={ProfilePic} alt="Pranay" className="profile-img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
