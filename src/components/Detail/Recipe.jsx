import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions }) => {
  
  const instructionElements = instructions[0].steps.map(instruction => (
    <li key={instruction.id}>
      <p> {instruction.step} </p>
    </li>
  ));
  console.log(Recipe);
  const ingredientsElements = ingredients.map(ingredient => (
    <li key={ingredient.id}>
      <p> {ingredient.original}</p>
    </li>
  ));
 
  return (
    <ul>
      {ingredientsElements}
      {instructionElements}
    </ul>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    
    instructions: PropTypes.string
  }).isRequired
};

export default Recipe;
 
