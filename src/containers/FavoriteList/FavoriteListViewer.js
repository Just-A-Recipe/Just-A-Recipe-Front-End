import React, { useState, useEffect } from 'react';
import FavoriteList from '../../components/Favorites/FavoritesList';
import {  getUserFavorites } from '../../services/spoonacular';
import firebase from '../../components/Firebase/Firebase';
import { fetchRecipe } from '../../services/spoonacular';

export default function FavoriteListViewer() {
  const [recipes, setRecipes] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getUserFavorites(firebase.getCurrentEmail())
      .then(favorites => {
      //  console.log(favorites);
        return Promise.all(favorites.body.map(recipeObj => fetchRecipe(recipeObj.recipeId)));
      })
      .then(fetchRecipes => setRecipes(fetchRecipes));
  }, [offset]);

  const decrement = () => setOffset(prevPage => prevPage - 20);
  const increment = () => setOffset(prevPage => prevPage + 20);
  return (
    <div>
      <button onClick={() => decrement()} disabled={offset === 0}>&lt;</button>

      <button onClick={() => increment()} disabled={recipes.length < 20}>&gt;</button>

      <FavoriteList favoriteList={recipes} />
    </div>
  );
}
