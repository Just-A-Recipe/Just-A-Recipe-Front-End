import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
// import Recipe from '../Detail/Recipe';
>>>>>>> 8e038e07f3af03b6586e1e030e2c2e876bc6ffd6
import styles from './RecipeList.css';
const RecipeList = ({ recipeList }) => {
  const recipeElements = recipeList.map(recipe => (
    <Link className={styles.RecipeList} key={recipe.id} to={`/${recipe.id}` }>
      <li>
        <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`}/>
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
<<<<<<< HEAD
=======
    image: PropTypes.string.isRequired
>>>>>>> 8e038e07f3af03b6586e1e030e2c2e876bc6ffd6
  })).isRequired
};
export default RecipeList;
