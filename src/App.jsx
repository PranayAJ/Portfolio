import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Snowflake from "./components/Snowflake";
import LiquidEther from './components/LiquidEther';
import { useTheme } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <LiquidEther
        colors={theme == "dark" ? ["#38BDF8", "#818CF8", "#C084FC"] : ["#00C6FF", "#72EDF2", "#A0E9FF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />

    </>
  );
}

export default App;
