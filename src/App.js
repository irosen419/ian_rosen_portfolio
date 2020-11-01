import React, { useState } from 'react'
import Intro from './Components/Intro'
import Works from './Containers/Works'
import About from './Containers/About'
import * as FaIcons from 'react-icons/fa'
import './App.scss';

function App() {

  return (
    <div className="App">
      <Intro />
      <About />
      <Works />
      <div id="social">
        <a href="https://www.linkedin.com/in/irosen419/" target="_blank"><FaIcons.FaLinkedin /></a>
        <a href="https://github.com/irosen419" target="_blank"><FaIcons.FaGithub /></a>
        <a href="https://twitter.com/irosen419" target="_blank"><FaIcons.FaTwitter /></a>
      </div>
    </div>
  );
}

export default App;
