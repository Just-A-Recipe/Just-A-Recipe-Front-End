import React from 'react';
import PropTypes from 'prop-types';
const Recipe = ({ image, title, ingredients, instructions }) => {
  console.log(image, title);
  const instructionElements = instructions[0].steps.map(instruction => (
    <li key={instruction.id}>
      <p> {instruction.step} </p>
    </li>
  ));
  const ingredientsElements = ingredients.map(ingredient => (
    <li key={ingredient.id}>
      <p> {ingredient.original}</p>
    </li>
  ));
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img src={`${image}`} />
      </div>
      <li>
        {ingredientsElements}
      </li>
      <ul>
        {instructionElements}
      </ul>
    </div>
  );
};
Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    instructions: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};
export default Recipe;
