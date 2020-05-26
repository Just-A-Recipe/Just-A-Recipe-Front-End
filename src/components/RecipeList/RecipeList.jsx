import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Recipe from '../Detail/Recipe';
import styles from './RecipeList.css';
import RecipeDetailViewer from '../../containers/RecipeDetailViewer/RecipeDetailViewer';

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
    <li key={recipe.id}>

    </li>
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
