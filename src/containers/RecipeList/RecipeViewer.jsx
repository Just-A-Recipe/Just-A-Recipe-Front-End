import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes } from '../../services/spoonacular';
import SearchBar from '../../components/Search/SearchBar';
import firebase from '../../components/Firebase/Firebase'

const RecipeViewer = () => {
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchRecipes(searchQuery, offset)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  }, [offset]);

  const [searchQuery, setSearchQuery] = useState('')
  const [name, setName] = useState('');

  if(!firebase.getCurrentUsername()){
    // do stuff if youre not signed in
  }
  
  useEffect(() => 
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
    fetchRecipes(searchQuery, offset)
      .then(fetchRecipes => setRecipes(fetchRecipes));
  };


  const decrement = () => setOffset(prevPage => prevPage - 20);
  const increment = () => setOffset(prevPage => prevPage + 20);
  // const message = firebase.getCurrentUsername ? `Welcome ${firebase.getCurrentUsername}` : null;
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
