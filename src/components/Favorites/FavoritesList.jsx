import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchRecipe, fetchRecipeImage } from '../../services/spoonacular';

const FavoriteList = ({ favoriteList }) => {

  const favoriteElement = favoriteList.map((favorite) => (
    <Link key={favorite.id} to={`/${favorite.id}`}>
      <li>
        <img src={favorite.image}/>
        <h2>{favorite.title}</h2>
      </li>
    </Link>
  )
  );
  const favoriteTitle = favoriteList.map(favorite => (
    <div key={favorite.id}></div>
  ));
  return (
    <ul>
      {favoriteElement}
      {/* {favoriteTitle} */}
    </ul>
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
