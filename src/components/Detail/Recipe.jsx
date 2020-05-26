
import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions }) => {
  console.log(ingredients);
  const instructionElements = instructions[0].steps.map(instruction => (
    <li key={instruction.id}>
      <p> {instruction.step} </p>
    </li>
  ));
  const ingredientsElements = ingredients[0].map(ingredient => (
    <li key={ingredient.id}>
      <p> {ingredient}</p>
    </li>
  ));
  
  
  return (
    <ul>
      {instructionElements}
      {ingredientsElements}
    </ul>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    measures: PropTypes.object,
    instructions: PropTypes.string
  }).isRequired
};

export default Recipe;
 
