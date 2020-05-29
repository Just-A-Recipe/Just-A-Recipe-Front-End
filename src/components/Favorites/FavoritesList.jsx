import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchRecipe, fetchRecipeImage } from '../../services/spoonacular';
import style from './FavoriteList.css'

const FavoriteList = ({ favoriteList }) => {
//   let currRecipe = await fetchRecipe(favorite.recipeId);
//   let currRecipeImage = await fetchRecipeImage(favorite.recipeId);
  const favoriteElement = favoriteList.map((favorite) => (
    <Link className={style.RecipeList} key={favorite.id} to={`/${favorite.id}`}>
      <div className={style.cardSection}>
        <div className={style.card}>
          <img className={style.image} src={favorite.image}/>
          <h2 className={style.title}>{favorite.title}</h2>
        </div>
      </div>
    </Link>
  )
  );
  
  const favoriteTitle = favoriteList.map(favorite => (
    <div key={favorite.id}></div>
  ));
  return (
    <div className={style.cardContainer}>
      {favoriteElement}
      {/* {favoriteTitle} */}
    </div>
  );
};

FavoriteList.propTypes = {
  favoriteList: PropTypes.arrayOf(PropTypes.shape(
    {
      id:PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }
  )).isRequired
};

export default FavoriteList;
