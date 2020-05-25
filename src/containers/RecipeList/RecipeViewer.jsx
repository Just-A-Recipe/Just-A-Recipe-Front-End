import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacular';

const RecipeViewer = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    fetchRecipes(searchQuery)
      .then(fetchRecipes => setRecipes(fetchRecipes));
    // console.log(searchQuery, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
      
  }, []);
  
  const onChange = ({ target }) => setSearchQuery(target.value);
  const onSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  };

  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);
  
  return (
    <>
      <SearchBar searchQuery={searchQuery} onChange={onChange} onSearch={onSearch}/>
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 10}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
