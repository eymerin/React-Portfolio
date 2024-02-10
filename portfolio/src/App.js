import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        } />
        <Route path="/hireme" element={
          <div>
            <Skills />
            <Contact />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Skills />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;