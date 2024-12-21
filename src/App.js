import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import DetailsTile from './components/DetailsTile';
import picture from '/Users/sarvk/Desktop/sarvsite/src/pictures/alaskamainpic.jpg'; 
import thdpic from '/Users/sarvk/Desktop/sarvsite/src/pictures/thdpic.png'; 
import githubpic from '/Users/sarvk/Desktop/sarvsite/src/pictures/github.png'; 


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

      <div name="aboutintro-container" className="aboutintro-container">
        <h2 className="introduction">a little about me :)</h2>
      </div>

      <div className='aboutme-div'>
        <div className="aboutme-vert-container">
            <h3 className='details'>
            Stumbled into the world of computer science in high school after learning that I could turn data into stories and insights with just a few lines of code.</h3>

            <h3 className='details'>
            I recently graduated from University of Illinois at Chicago where I earned a B.S in C.S.</h3>

            <h3 className='details'>
            I am continuing my studies at the University of California at San Diego studying Computer Science and specializing in Artificial Intelligence. </h3>
        </div>
        <img src={picture} className='aboutme-pic' alt="About Me" />
      </div>

      <div className="experience-container">
        <h2 className="introduction">experiences</h2>
      </div>

      <div className="project-container">
        <h2 className="introduction">some cool things i tried to build</h2>
          
          <div className='project-row'> 
            <div className='project-header'>
              <h3 className='project-details'>Movie Rating Sentiment Analysis</h3>
              <a href="https://github.com/SarvaniK-26/Movie-Rating-Sentiment-Analysis">
              <img src={githubpic} className='githubpic' alt="githublink"/>
              </a>
            </div>
            <p className="project-desc">
              Built a sentiment analysis tool that classifies movie reviews as positive or negative using machine learning models.
            </p>
          </div>

          <div className="project-row"> 
            <div className="project-header">
              <h3 className="project-details">Vital Sense</h3>
              <a href="https://github.com/SarvaniK-26/VitalSense">
                <img src={githubpic} className="githubpic" alt="githublink"/>
              </a>
            </div>
            <p className="project-desc">
              Built a random forest classifier to predict heart disease, achieving an accuracy of 82%.              </p>
          </div>

          <div className="project-row"> 
            <div className="project-header">
              <h3 className="project-details">Flight Price Spotter</h3>
              <a href="https://github.com/SarvaniK-26/FlightPriceSpotter">
                <img src={githubpic} className="githubpic" alt="githublink"/>
              </a>
            </div>
            <p className="project-desc">
              As I was trying to find cheap flight tickets to move in for grad school in San Diego I realized I could create a script that sends me emails when tickets hit a certain price. This helped make the process more simple               </p>
          </div>
      </div>
      
       
      <div className="passion-container">
        <h2 className="introduction">what i’m up to when i’m not staring at my laptop coding</h2>
      </div>

      <div className='passions'>
        <div className = 'passions-row'>
          <h3 className='details'>The Hidden Dream</h3>
        </div>
        <div className = 'passions-row'>
          <img src={thdpic} className='thdpic' alt="THD"/>

          <div className = 'thdtext'>
            <h3 className='thdpassion'>After years of advocating for the hundreds of thousands of visa immigrants who were facing deportation at the age of 21 (just like I was) I found others who were in the same situation in 2020.</h3>
            <h3 className='thdpassion'>Our shared passion became The Hidden Dream and four years later we have been able to provide our community with mental health help, survival guide, and scholarship fund.</h3>
          </div>

        </div>
          
        </div>
    </div>

  );
}

export default App;
