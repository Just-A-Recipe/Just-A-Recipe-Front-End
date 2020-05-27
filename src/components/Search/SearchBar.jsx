import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.css';



const SearchBar = ({ searchQuery, onChange, onSearch, checked }) => (
  <section>
    <form onSubmit={onSearch}>
<<<<<<< HEAD
      <input className={styles.myInput} 
        type="text" 
        value={searchQuery} 
        onChange={onChange} />
      <button className={styles.myButton}>Search</button> 
=======
      <input type="text" value={searchQuery} onChange={onChange} />
      <button>Search</button> 
      <input type="checkbox" value={checked} />
>>>>>>> 5864739037dacf0d856155bd7e4c376fada22d62
    </form>
  </section>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

};
export default SearchBar;

  

