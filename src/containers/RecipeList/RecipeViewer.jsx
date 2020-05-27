import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacular';
import SearchBar from '../../components/Search/SearchBar';

const RecipeViewer = () => {
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchRecipes(searchQuery, offset)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  }, [offset]);
  
  const onChange = ({ target }) => setSearchQuery(target.value);
  const onSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery, offset)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  };

  const decrement = () => setOffset(prevPage => prevPage - 20);

  const increment = () => setOffset(prevPage => prevPage + 20);
  
  return (
    <>
      <SearchBar searchQuery={searchQuery} onChange={onChange} onSearch={onSearch}/>
      <button onClick={() => decrement()} disabled={offset === 0}>&lt;</button>
      <button onClick={() => increment()} disabled={recipes.length < 20}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
