import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.css';

const Recipe = ({ image, title, ingredients, instructions, measures }) => (
  <figure className={styles.Recipe}>
    <img src={image}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
    <p>{measures}</p>
    <h3>
       Instructions
    </h3>
    <p className={styles.instructions}>{instructions}</p>
  </figure>
   
    
);

Recipe.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  measures: PropTypes.object,
  instructions: PropTypes.string
};

export default Recipe;
 
