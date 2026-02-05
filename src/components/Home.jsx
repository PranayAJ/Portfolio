import React from "react";
import Navbar from "./Navbar.jsx";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.hero}>
        <img
          src="/Portfolio/BrushStroke.png"
          className={styles.bckImage}
          alt="Background lines"
        />
        <div className={styles.imageContainer}>
          <img
            src="/Portfolio/PranayPicture.png"
            className={styles.heroImage}
            alt="Pranay's face"
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.greeting}>Hey There,</h1>
            <h1 className={styles.name}>I'm Pranay</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
