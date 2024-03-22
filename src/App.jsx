import './App.css'
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";



export default function App() {
  return (

    <Router>
      <div className="text-gray-400 bg-gray-900 body-font">
        <Header />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}
