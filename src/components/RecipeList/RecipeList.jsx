import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './RecipeList.css';

const RecipeList = ({ recipeList }) => {
  const recipeElements = recipeList.map(recipe => (
    <Link className={styles.RecipeList} key={recipe.id} to={`/${recipe.id}` }>
      {/* <li>
        <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}/>
        <h2>{recipe.title}</h2>
      </li> */}
      <div className={styles.cardSection}>
        <div className={styles.card}>
          <img className={styles.image} src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}/>
          <div className={styles.title}>{recipe.title}</div>
        </div>
      </div>

    </Link>
  ));
  return (
    <div className={styles.cardContainer}>
      {recipeElements}
    </div>
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
