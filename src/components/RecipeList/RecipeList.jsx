import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipes from '../RecipeList/Recipes';
import styles from './RecipeList.css';

const RecipeList = ({ recipeList }) => {
  
  const recipeElements = recipeList.map(recipe => (
    
    <Link className={styles.RecipeList} key={recipe.id} to={`/${recipe.id}` }>
      <img src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`}/>
      <ul>
        <Recipes {...recipe} />
      </ul>
    </Link>

  ));

  return (
    <ul>
      {recipeElements}
    </ul>
    
  );
};

RecipeList.propTypes = {
  recipeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired
  })).isRequired
};
export default RecipeList;
