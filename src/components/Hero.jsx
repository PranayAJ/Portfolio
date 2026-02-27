import React from "react";
import ProfilePic from "../../public/PranayPicture.png";
import ProfileLogo from "../../public/PranayLogo.png";
import ProfileLogoDark from "../../public/PranayLogoDark.png";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const downloadResume = () => {
    const link = document.createElement("a"); // file in public folder
    link.href = "https://pranayaj.github.io/Portfolio/PranayResume.pdf";
    link.download = "PranayResume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header className="hero">
      <nav className="nav .highlight">
        <img
          className="logo-img"
          src={theme === "dark" ? ProfileLogoDark : ProfileLogo}
          alt="Pranay's logo"
        />

        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <div className={`toggle-thumb ${theme === "dark" ? "dark" : ""}`}>
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-left">
          <h1>
            <span>Hi, I’m Pranay</span>
            <div className="hero-badge">Software Engineer</div>
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


      <button className="resume-btn" onClick={downloadResume}>
        <span className="btn-text">Download Resume</span>
      </button>
    </header >
  );
};

export default Hero;
