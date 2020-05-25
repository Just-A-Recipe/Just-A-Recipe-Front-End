import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacularAPIFetch';

const RecipeViewer = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState(['']);
  const searchQuery = '';
  
  useEffect(() => {
    fetchRecipes(searchQuery)
      .then(fetchRecipes => setRecipes(fetchRecipes));
    // console.log(searchQuery, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
      
  }, []);

  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);
  
  return (
    <>
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 10}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
