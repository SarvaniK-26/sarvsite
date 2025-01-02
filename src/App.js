import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import DetailsTile from './components/DetailsTile';
import picture from '/Users/sarvk/Desktop/sarvsite/src/pictures/alaskamainpic.jpg'; 
import thdpic from '/Users/sarvk/Desktop/sarvsite/src/pictures/thdpic.png'; 
import githubpic from '/Users/sarvk/Desktop/sarvsite/src/pictures/github.png'; 
import { motion } from "motion/react"
import teenvogue from '/Users/sarvk/Desktop/sarvsite/src/pictures/teenvogue.png'; 
import stl from '/Users/sarvk/Desktop/sarvsite/src/pictures/stl.png'; 
import lifting from  '/Users/sarvk/Desktop/sarvsite/src/pictures/lifting.jpg'; 

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Internships from './components/card';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="aboutintro-container" smooth={true} duration={500} offset={-100}>about</Link>
          <Link to="experience-container" smooth={true} duration={500} offset={-100}>experiences</Link>
          <Link to="project-container" smooth={true} duration={500} offset={-100}>projects</Link>
          <Link to="passion-container" smooth={true} duration={500} offset={-100}>passions</Link>
        </div>
        <div className="nav-button">
          <button className='button' onClick={() => window.open('https://docs.google.com/document/d/1OoISfoLCXqhwHxKGlH-wyANbt7YZpIftSCtx_dOpFtg/edit?usp=sharing', '_blank')}>resume</button>
        </div>
      </nav>

      <div className="introduction-container">
        <h2 className="introduction">Hi, my name is</h2>
        <h1 className='name'>Sarvani Kunapareddy</h1>
        <h3 className='details'>learning, traveling, watching movies, and having a good time </h3>
      </div>

      <div name="aboutintro-container" className="aboutintro-container">
        <h2 className="introduction">a little about me :)</h2>
      </div>


      {/* ABOUT ME */}
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


      {/* EXPERIENCES */}
      <div className="experience-container">
        <h2 className="introduction">experiences</h2>
      </div>


  {/* INTERNSHIPS */}
      <Element name="internships-container" className="internships-container">
        <Internships />
      </Element>
  
      
      {/* PROJECTS */}
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

       

      {/* PASSIONS */}
      <div className="passion-container">
        <h2 className="introduction">what i’m up to when i’m not staring at my laptop coding</h2>
      </div>


      <div className='passions'>

        {/* first passion - THD */}
        <div className = 'passions-row'>
          <h3 className='details-passion'>The Hidden Dream</h3>
        </div>

        <div className = 'passions-row'>
        <a href="https://thehiddendream.org">
            <img src={thdpic} className="thdpic" />
          </a>

          <div className = 'thdtext'>
            <h3 className='thdpassion'>After years of advocating for the hundreds of thousands of visa immigrants who were facing deportation at the age of 21 (just like I was) I found others who were in the same situation in 2020.</h3>
            <h3 className='thdpassion'>Our shared passion became The Hidden Dream and four years later we have been able to provide our community with mental health help, survival guide, and scholarship fund.</h3>
          </div>
        </div>

        <div className="link-container">
          <a href="https://www.teenvogue.com/story/21-under-21-2020">
            <img src={teenvogue} className="teenvogue" />
          </a>
          <a href="https://www.stltoday.com/opinion/column/kunapareddy-i-ve-lived-in-missouri-most-of-my-life-but-i-cant-become-an/article_233fbff9-1811-504f-a797-c0215eef6c64.html">
            <img src={stl} className="stl" />
          </a>
        </div>


        {/* second passion - lifting */}
        <div className = 'passions-row'>
          <h3 className='details-passion'>Lifting</h3>
        </div>

        <div className = 'passions-row'>
        <img src={lifting} className="lifting" />
        

          <div className = 'liftingtext'>
            <h3 className='thdpassion'>My parents have always been super huge on staying active, so growing up I constantly tried new gym classes (yoga, zumba, pilates etc.). I attempted multiple CrossFit workouts with my dad (was not for me) but it made me really appreciate lifitng.</h3>
            <h3 className='thdpassion'>Down the line it taught me how to be confident in my own skin, deal with problems, and ofc flex in every mirror.</h3>
            <h3 className='thdpassion'>Thank you to my dad for introducing me to lifting forever grateful :)</h3>
          </div>
        </div>
        

      </div>

        </div>

  );
}

export default App;