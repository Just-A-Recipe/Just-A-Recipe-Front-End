import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes, fetchGlutenFree } from '../../services/spoonacular';
import SearchBar from '../../components/Search/SearchBar';
import firebase from '../../components/Firebase/Firebase';

const RecipeViewer = () => {
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(checked) {
      fetchGlutenFree(searchQuery, offset).then(fetchGlutenFree =>   setRecipes(fetchGlutenFree));
    } else {
      fetchRecipes(searchQuery, offset)
        .then(fetchRecipes => setRecipes(fetchRecipes));
    }
  }, [offset, checked]);

  if(!firebase.getCurrentUsername()){
    // do stuff if not logged in
  }
  const onChange = ({ target }) => setSearchQuery(target.value);

  const onSearch = (e) => {
    e.preventDefault();
    if(checked) {
      console.log('string');
      fetchGlutenFree(searchQuery, offset).then(fetchGlutenFree =>   setRecipes(fetchGlutenFree));
    } else {
      fetchRecipes(searchQuery, offset)
        .then(fetchRecipes => setRecipes(fetchRecipes));
    }
  };

  const handleChecked = () => setChecked(!checked);

  const decrement = () => setOffset(prevPage => prevPage - 20);
  const increment = () => setOffset(prevPage => prevPage + 20);
  // const message = firebase.getCurrentUsername ? `Welcome ${firebase.getCurrentUsername}` : null;
  return (
    <>
      <SearchBar searchQuery={searchQuery} onChange={onChange} onSearch={onSearch} checked={handleChecked} />

      <button onClick={() => decrement()} disabled={offset === 0}>&lt;</button>

      <button onClick={() => increment()} disabled={recipes.length < 20}>&gt;</button>

      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;
