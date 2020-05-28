import React, { useState, useEffect } from 'react';
import FavoriteList from '../../components/Favorites/FavoritesList';
import {  getUserFavorites } from '../../services/spoonacular';
import firebase from '../../components/Firebase/Firebase';

export default function FavoriteListViewer() {
  const [recipes, setRecipes] = useState(['']);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getUserFavorites(firebase.getCurrentEmail())
      .then(favorites => setRecipes(favorites.body));
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
