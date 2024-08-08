import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import DetailsTile from './components/DetailsTile';
import picture from '/Users/sarvk/Desktop/sarvsite/src/pictures/alaskamainpic.jpg'; 
import thdpic from '/Users/sarvk/Desktop/sarvsite/src/pictures/thdpic.png'; 


function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="aboutintro-container" smooth={true} duration={500} offset={-100}>about</Link>
          <Link to="experience-container" smooth={true} duration={500} offset={-100}>experience</Link>
          <Link to="project-container" smooth={true} duration={500} offset={-100}>projects</Link>
          <Link to="passion-container" smooth={true} duration={500} offset={-100}>passions</Link>
        </div>
      </nav>

      <div className="introduction-container">
        <h2 className="introduction">Hi, my name is</h2>
        <h1 className='name'>Sarvani Kunapareddy</h1>
        <h3 className='details'>trying to learn, travel, and have a good time </h3>
      </div>

      <Element name="aboutintro-container" className="aboutintro-container">
        <h2 className="introduction">a little about me :)</h2>
      </Element>

      <div className='aboutme-div'>
        <div className="aboutme-vert-container">
            <h3 className='details'>
            Stumbled into the world of computer science in high school after learning that I could turn data into stories and insights with just a few lines of code.</h3>

            <h3 className='details'>
            I recently graduated from University of Illinois at Chicago where I earned a B.S in C.S.</h3>

            <h3 className='details'>
            I’ll be continuing my studies at the University of California at San Diego studying Computer Science and specializing in Artificial Intelligence. </h3>
        </div>
        <img src={picture} className='aboutme-pic' alt="About Me" />
      </div>

      <div className="experience-container">
        <h2 className="introduction">experiences</h2>
      </div>

      <div className="project-container">
        <h2 className="introduction">some cool things i tried to build</h2>
      </div>
       
      <div className="passion-container">
        <h2 className="introduction">what i’m up to when i’m not staring at my laptop coding</h2>
      </div>

      <div className='passions'>
        <div className = 'passions-row'>
          <h3 className='details'>The Hidden Dream</h3>
        </div>
          <img src={thdpic} className='thdpic' alt="THD" />
        </div>
    </div>

  );
}

export default App;
