import React, { useState, useEffect } from 'react';
import FavoriteList from '../../components/Favorites/FavoritesList';
import { getUserFavorites } from '../../services/spoonacular';
import firebase from '../../components/Firebase/Firebase';
import { fetchRecipe } from '../../services/spoonacular';
import style from './FavoriteListViewer.css';

export default function FavoriteListViewer() {
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    getUserFavorites(firebase.getCurrentEmail())
      .then(favorites => {
        return Promise.all(favorites.body.map(recipeObj => fetchRecipe(recipeObj.recipeId)));
      })
      .then(fetchRecipes => setRecipes(fetchRecipes));
  }, [offset]);

  const decrement = () => setOffset(prevPage => prevPage - 28);
  const increment = () => setOffset(prevPage => prevPage + 28);
  return (
    <div>
      <button className={style.pagingBackButton} onClick={() => decrement()} disabled={offset === 0}>&lt;</button>
      <button className={style.pagingForwardButton} onClick={() => increment()} disabled={recipes.length < 20}>&gt;</button>
      <FavoriteList favoriteList={recipes} />
    </div>
  );
}
