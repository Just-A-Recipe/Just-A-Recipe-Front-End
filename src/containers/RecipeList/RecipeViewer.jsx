// import React, { useState, useEffect,  } from 'react';
// import RecipeList from '../../components/RecipeList/RecipeList';
// import { fetchRecipes } from '../../services/spoonacularAPIFetch';
import SearchBar from '../../components/Search/SearchBar';

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




// const RecipeViewer = () => {
//   const [page, setPage] = useState(1);
//   const [recipes, setRecipes] = useState(['']);
//   const searchQuery = '';
  
//   // useEffect(() => {
//   //   fetchRecipes(searchQuery)
//   //     .then(fetchRecipes => setRecipes(fetchRecipes));
//   //   console.log(searchQuery, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
      
//   // }, []);
//  const handleChange = ({ target }) => {}
//   const decrement = () => setPage(prevPage => prevPage - 1);
//   const increment = () => setPage(prevPage => prevPage + 1);
  

//   return (
//     <>
//       <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
//       <button onClick={() => increment(1)} disabled={recipes.length < 10}>&gt;</button>
//       <RecipeList recipeList={recipes} />
//     </>
//   );
// };

// export default RecipeViewer;

import React, { Component } from 'react';

export default class RecipeViewer extends Component {
  state = {
    searchText: ','
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({ searchText: '' }));
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <SearchBar text={searchText} onChange={this.handleChange} onSubmit={this.handleSubmit}  />
      </div>
    )
  }
}

  return (
    <>
      {search}
      <button onClick={() => decrement(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => increment(1)} disabled={recipes.length < 10}>&gt;</button>
      <RecipeList recipeList={recipes} />
    </>
  );
};

export default RecipeViewer;

