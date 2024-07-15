import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import DetailsTile from './components/DetailsTile';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500}>about</Link>
          <Link to="experience" smooth={true} duration={500}>experience</Link>
          <Link to="projects" smooth={true} duration={500}>projects</Link>
          <Link to="passion" smooth={true} duration={500}>passions</Link>
        </div>
      </nav>

      <div className="introduction-container">
        <h2 className="introduction">Hi, my name is</h2>
        <h1 className='name'>Sarvani Kunapareddy</h1>
      </div>

      <div className="content">
        <Element name="about" className="element">
        </Element>
      </div>

    </div>
  );
}

export default App;
