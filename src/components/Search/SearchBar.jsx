import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.css';

const allergy = ['Seafood', 'Egg', 'Dairy', 'Gluten', 'Grain', 'Peanut', 'Sesame',  'Shellfish', 'Soy', 'Sulfite', 'Wheat'];
const SearchBar = ({ searchQuery, onChange, onSearch, checked }) => {
  const checkboxElements = allergy.map(option => (
    <label className={style.label}key={option}>
      <input className={style.checkbox} type="checkbox" value={option} onClick={checked}></input>
      {option} Free 
    </label>
  ));
  
  return (
    <section className={style.section}>
      <form onSubmit={onSearch}>
        <input className={style.inputField} type="text" value={searchQuery} onChange={onChange} />
        <button className={style.searchButton}>Search</button> 
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
