import React from 'react';
import PropTypes from 'prop-types';
// import style from './SearchBar.css';

const allergy = ['Seafood', 'Dairy', 'Gluten', 'Grain', 'Peanut', 'Sesame',  'Shellfish', 'Soy', 'Sulfite', 'Wheat'];

const SearchBar = ({ searchQuery, onChange, onSearch, checked }) => {
  const checkboxElements = allergy.map(option => (
    <label key={option}>
      <input type="checkbox" value={option} onClick={checked}></input>
      {option} Free 
    </label>
  ));
  
  return (
    <section>
      <form onSubmit={onSearch}>
        <input type="text" value={searchQuery} onChange={onChange} />
        <button>Search</button> 
        {checkboxElements}    
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired
};
export default SearchBar;
