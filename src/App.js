import React from 'react';

import './App.css';
import Nav from './components/Navbar';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
