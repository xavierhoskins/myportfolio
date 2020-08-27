import React from 'react';

import './App.css';
import Nav from './components/Navbar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main id="section1" />
      <Portfolio id="section2" />
      <AboutMe id="section3" />
      <Skills id="section4" />
      <Contact id="section6" />
    </div>
  );
}

export default App;
