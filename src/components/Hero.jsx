import React from "react";
import ProfilePic from "../../public/PranayPicture.png";
import ProfileLogo from "../../public/PranayLogo.png";
import ProfileLogoDark from "../../public/PranayLogoDark.png";
import { useTheme } from "../ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="hero">
      <nav className="nav">
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
          <div className="hero-badge">
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
  );
};

export default Hero;
