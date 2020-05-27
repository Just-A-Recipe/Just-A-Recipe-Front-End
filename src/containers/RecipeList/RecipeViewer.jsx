import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacular';
import SearchBar from '../../components/Search/SearchBar';
import firebase from '../../components/Firebase/Firebase'

const RecipeViewer = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('')
  const [name, setName] = useState('');

  if(!firebase.getCurrentUsername()){
    // do stuff if youre not signed in
  }
  
  useEffect(() => {
    
    fetchRecipes(searchQuery)
      .then(fetchRecipes => {
        setRecipes(fetchRecipes);
        setName(firebase.getCurrentUsername());
      }
      );
      
  }, []);
  
  const onChange = ({ target }) => setSearchQuery(target.value);
  const onSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  };
  // const message = firebase.getCurrentUsername ? `Welcome ${firebase.getCurrentUsername}` : null;
  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);
  
  return (
    <>
      <SearchBar searchQuery={searchQuery} onChange={onChange} onSearch={onSearch}/>
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 10}>&gt;</button>
      <h3>{name}</h3>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
