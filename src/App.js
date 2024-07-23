import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import DetailsTile from './components/DetailsTile';
import picture from '/Users/sarvk/Desktop/sarvsite/src/pictures/alaskamainpic.jpg'; 

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="aboutintro-container" smooth={true} duration={500}>about</Link>
          <Link to="experience" smooth={true} duration={500}>experience</Link>
          <Link to="projects" smooth={true} duration={500}>projects</Link>
          <Link to="passion" smooth={true} duration={500}>passions</Link>
        </div>
      </nav>

      <div className="introduction-container">
        <h2 className="introduction">Hi, my name is</h2>
        <h1 className='name'>Sarvani Kunapareddy</h1>
        <h3 className='details'>trying to learn, travel, and have a good time </h3>
      </div>

      <div className="aboutintro-container">
        <h2 className="introduction">a little about me :)</h2>
      </div>


      <div className='aboutme-div'>

        <body className="aboutme-vert-container">
            <h3 className='details'>
            Stumbled into the world of computer science in high school after learning that I could turn data into stories and insights with just a few lines of code.</h3>

            <h3 className='details'>
            I recently graduated from University of Illinois at Chicago where I earned a B.S in C.S.</h3>

            <h3 className='details'>
            I’ll be continuing my studies at the University of California at San Diego studying Computer Science and specializing in Artificial Intelligence. </h3>
        </body>

              <img src={picture} className='aboutme-pic' />;

      </div>
      
      

      



      <div className="content">
        <Element name="about" className="element">
        </Element>
      </div>

    </div>
  );
}

export default App;
