import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Left logo */}
      <div className={styles.logo}>
        <img className={styles.facelogo} src="/PranayLogo.png" alt="logo" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar1 : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar2 : ""}`}
        ></div>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar3 : ""}`}
        ></div>
      </div>

      {/* Center links */}
      <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/about">
            ABOUT
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/projects">
            PROJECTS
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="/contact">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Right logo */}
      <div className={styles.logo}>
        <img className={styles.githublogo} src="/github-mark.png" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
