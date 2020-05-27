import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions }) => {
  const instructionElements = instructions[0].steps.map(instruction => (
    <div className='instructions-table' key={instruction.id}>
      <p> {instruction.step} </p>
    </div>
  ));

  const ingredientsElements = ingredients.map(ingredient => (
    <div className='ingredients-table' key={ingredient.id}>
      <p> {ingredient.original}</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img className='detail-image' src={`${image}`} />
      </div>
      <section>
        {ingredientsElements}
      </li>
      <ul>
        {instructionElements}
      </section>
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
