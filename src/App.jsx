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

//how to host website? projects? 
  // frontend only - github pages
  // name the repo specially: obienias.github.io https://github.com/obienias
// https://github.com/dargaCode/dargacode.github.io
// you specially name the repo and then you can use the "github pages" feature to point your whole domain name to that repo
//how to link components in react? - router?
//how to add my MapSF project?

//can I add tailwind re-build funtion somewhere to automate the process of css re-building? 
// tailwindcss build -o styles.css
 // how to add resume pdf?
//add github and hosted link to projects => 4 projects total: MapSF, vacation packingList, 
// while click on the project => pop-up card comes up, modal, more info gitHub + site link + video. Next projects 
// contact me - add icons + add footer

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
