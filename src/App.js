import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
