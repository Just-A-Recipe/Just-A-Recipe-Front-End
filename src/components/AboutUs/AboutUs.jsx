import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default class AboutUs extends Component {
  render () {
    return (
      <div>
        <h1 className='heading'> Just a Recipe</h1>
        <div className='card-wrapper'>
          <div className='card'>
            <img className='background' src={bCImage} alt=''/>
            <img className='profile-img' src={codyImg} alt=''/>
            <h1> Cody</h1>
            <p className='job-title'>Software Engineer</p>
            <p className='about'> Favorite Cocktail: 69 special </p>
            <p className='contact'>Contact</p>
          </div>
          <div className='card'>
            <img className='background' src={bCImage} alt=''/>
            <img className='profile-img' src={suriImg} alt=''/>
            <h1> Surelis Segarra</h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Cocktail: Gin and Tonic </p>
            <p className='contact'>Contact</p>
          </div>  <div className='card'>
            <img className='background' src={bCImage} alt=''/>
            <img className='profile-img' src={dorjeImg} alt=''/>
            <h1> Dorje Kirsten </h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Cocktail: The Vesper Royale </p>
            <p className='contact'>Contact</p>
          </div>
          <div className='card'>
            <img className='background' src={bCImage} alt=''/>
            <img className='profile-img' src={anastasiaImg} alt=''/>
            <h1> Anastasia Morozova</h1>
            <p className='job-title'>Software Developer</p>
            <p className='about'> Favorite Cocktail: Mezcal Margarita </p>
            <p className='contact'>Contact</p>
          </div>
        </div>
      </div>
    );
  }};


