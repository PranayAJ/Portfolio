import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Project from "../src/components/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Project />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
