import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './RecipeList.css';

const RecipeList = ({ recipeList }) => {
  const recipeElements = recipeList.map(recipe => (
    <Link className={styles.RecipeList} key={recipe.id} to={`/${recipe.id}` }>
      <li>
        <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}/>
        <h2>{recipe.title}</h2>
      </li>
    </Link>
  ));
  const recipeTitle = recipeList.map(recipe => (

    <div key={recipe.id}>
    </div>
    
  ));
  return (
    <ul>
      {recipeElements}
      {recipeTitle}
    </ul>
  );
};
RecipeList.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

  })).isRequired
};
export default RecipeList;
