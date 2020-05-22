import React, { useState, useEffect } from 'react';
import RecipeList from '../../App/RecipeList/RecipeList';
import { fetchRecipes } from '../../../services/spoonacularAPIFetch';

const RecipeViewer = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetchRecipes(page)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  }, [page]);

  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);
  
  return (
    <>
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 20}>&gt;</button>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default RecipeViewer;
