import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipe from '../Detail/Recipe';

const RecipeList = ({ recipeList }) => {
  console.log(recipeList);
  const recipeElements = recipeList.map(recipe => (
    <Link to={`/${recipe.id}`} key={recipe.id}>
      <li>
        <Recipe {...recipe} />
      </li>
    </Link>

  ));

  return (
    <ul>
      {recipeElements}
    </ul>
    
  );
};
// console.log(recipeElements);
// console.log(...recipe);
// console.log(recipe.id);
  
  

RecipeList.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
export default RecipeList;
