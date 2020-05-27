import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import DorjeImg from '../assets/Dorje.JPG';
import CodyImg from '../assets/Cody.JPG';
import JamesImg from '../assets/James.JPG';
import AnastasiaImg from '../assets/Anastasia.JPG';
import SuriImg from '../assets/Suri.JPG';

export default class AboutUs extends Component {
  render () {
    return (
      <div>
        <h1 className='heading'> Just a Recipe</h1>
        <div className='card-wrapper'>

          <div className='card'>
            <img className='profile-img' src={CodyImg} alt=''/>
            <h1> Cody</h1>
            <p className='job-title'>Software Engineer</p>
            <p className='about'> Favorite Food: Steak and Lobster </p>
            <a href="https://www.linkedin.com/in/codylylebrown/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/cody2934" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
          </div>

          <div className='card'>
            <img className='profile-img' src={SuriImg} alt=''/>
            <h1> Surelis Segarra</h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Food: Grilled Chicken and Plantain</p>
            <p className='contact'>Contact</p>

          </div>  <div className='card'>
            <img className='profile-img' src={DorjeImg} alt=''/>
            <h1> Dorje Kirsten </h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Food: Spaghetti Carbonara</p>
            <p className='contact'>Contact</p>
          </div>

          <div className='card'>
            <img className='profile-img' src={AnastasiaImg} alt=''/>
            <h1> Anastasia Morozova</h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Food: Sushi and Sashimi </p>
            <p className='contact'>Contact</p>
          </div>
        </div>

        <div className='card'>
          <img className='profile-img' src={JamesImg} alt=''/>
          <h1>James Eserjose</h1>
          <p className='job-title'>Software Developer</p>
          <p className='about'> Favorite Food: Grilled Tri Tip</p>
          <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
          <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </div>
      </div>
    
    );
  }}


