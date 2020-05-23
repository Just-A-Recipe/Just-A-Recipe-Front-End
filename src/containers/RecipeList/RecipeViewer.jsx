import React, { useState } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacularAPIFetch';
import SearchBar from '../../components/Search/SearchBar';

const RecipeViewer = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = ({ target }) =>  {
    setSearchQuery(target.value);
  };
  const handleClick = () => {
    fetchRecipes(searchQuery)
      .then(recipes => setRecipes(recipes.recipes));
  };

  const search = <SearchBar onChange={handleChange} onClick={handleClick}/>;



  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);
  
  return (
    <>
      {search}
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 20}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
