import React from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.css';

const SearchBar = ({ searchQuery, onChange, onSearch, checked }) => (
  <section className={style.section}>
    <form onSubmit={onSearch}>
        <input className={style.inputField} type="text" value={searchQuery} onChange={onChange} />
        <button className={style.searchButton}>Search</button> 
      <label>
        <input type="checkbox" onClick={checked}></input>
      GlutenFree</label>
    </form>
    {/* <form>
      <label>
        <input type="checkbox" value={checked}></input>
      Vegan</label>
    </form> */}
  </section>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired
};
export default SearchBar;
