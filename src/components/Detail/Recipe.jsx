import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions, measures }) => (
  <figure>
    <img src={image}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
    <p>{measures}</p>
    <p>{instructions}</p>
  </figure>
);

Recipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  measures: PropTypes.object.isRequired,
  instructions: PropTypes.string.isRequired
};

export default Recipe;
 
