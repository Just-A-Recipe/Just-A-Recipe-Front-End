import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipe from '../../components/App/Detail';
// import styles from './Recipes.css';

const RecipeList = ({ recipeList }) => {
  const recipeElements = recipeList.map(recipe => (
    <li key={recipe.id}>
      <Link to={`/${recipe.id}`}>
        <Recipe { ...recipe } />
      </Link>
    </li>
  ));

  return (
    <ul>
      {recipeElements}
    </ul>
  );
};
RecipeList.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};
export default RecipeList;
