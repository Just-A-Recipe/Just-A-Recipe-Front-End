import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import { fetchRecipes, fetchIntolerances } from '../../services/spoonacular';
import SearchBar from '../../components/Search/SearchBar';
import firebase from '../../components/Firebase/Firebase';
import style from './RecipeViewer.css';
const RecipeViewer = () => {
  const [recipes, setRecipes] = useState(['']);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [name, setName] = useState('');
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    if(checked.length > 0) {
      const intString = checked.join(',');
      fetchIntolerances(searchQuery, offset, intString).then(fetchIntolerances =>   setRecipes(fetchIntolerances));
    } else {
      fetchRecipes(searchQuery, offset)
        .then(fetchRecipes => setRecipes(fetchRecipes));
    }
  }, [offset, checked]);
  if(!firebase.getCurrentUsername()){
    // do stuff if youre not signed in
  }
  useEffect(() => {
    fetchRecipes(searchQuery, offset)
      .then(fetchRecipes => setRecipes(fetchRecipes));
    setName(firebase.getCurrentUsername());
  }, [offset]);
  const onChange = ({ target }) => setSearchQuery(target.value);
  const onSearch = (e) => {
    e.preventDefault();
    if(checked.length > 0) {
      const intString = checked.join(',');
      fetchIntolerances(searchQuery, offset, intString).then(fetchIntolerances =>   setRecipes(fetchIntolerances));
    } else {
      fetchRecipes(searchQuery, offset)
        .then(fetchRecipes => setRecipes(fetchRecipes));
    }
  };
  const handleChecked = ({ target }) => {
    if(target.checked) {
      setChecked([...checked, target.value]);
    } else {
      const checkedIndex = checked.indexOf(target.value);
      const newArr = checked.slice();
      newArr.splice(checkedIndex, 1);
      setChecked(newArr);
    }
  };
  const decrement = () => setOffset(prevPage => prevPage - 30);
  const increment = () => setOffset(prevPage => prevPage + 30);
  // const message = firebase.getCurrentUsername ? `Welcome ${firebase.getCurrentUsername}` : null;
  return (
    <>
      <SearchBar searchQuery={searchQuery} onChange={onChange} onSearch={onSearch} checked={handleChecked} />
      <button className={style.pagingBackButton} onClick={() => decrement()} disabled={offset === 0}>&lt;</button>
      <button className={style.pagingForwardButton} onClick={() => increment()} disabled={recipes.length < 20}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};
export default RecipeViewer;


