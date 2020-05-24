import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
  const recipeElements = recipes.map(recipe => (
    <li key={recipe.id}>
      <Recipe {...recipe} />
    </li>
  ));

  return (
    <ul>
      {recipeElements}
    </ul>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
export default Recipes;
