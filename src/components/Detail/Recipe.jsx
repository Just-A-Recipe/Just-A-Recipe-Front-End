import React from 'react';
import PropTypes from 'prop-types';
const Recipe = ({ image, title, ingredients, instructions }) => {
<<<<<<< HEAD
  
=======
  console.log(image, title);
>>>>>>> 8e038e07f3af03b6586e1e030e2c2e876bc6ffd6
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
<<<<<<< HEAD
 
=======
>>>>>>> 8e038e07f3af03b6586e1e030e2c2e876bc6ffd6
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img src={`${image}`} />
      </div>
      <ul>
        {ingredientsElements}
        {instructionElements}
      </ul>
    </div>
  );
};
Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    instructions: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};
export default Recipe;
