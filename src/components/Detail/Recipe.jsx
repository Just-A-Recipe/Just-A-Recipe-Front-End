import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions, measures }) => (
  <figure>
    <img src={`https://spoonacular.com/recipeImages/${image}`}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
    <p>{measures}</p>
    <p>{instructions}</p>
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
 
