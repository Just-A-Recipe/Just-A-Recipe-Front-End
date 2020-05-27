import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.css';



const SearchBar = ({ searchQuery, onChange, onSearch }) => (
  <section>
    <form onSubmit={onSearch}>
      <input className={styles.myInput} 
        type="text" 
        value={searchQuery} 
        onChange={onChange} />
      <button className={styles.myButton}>Search</button> 
    </form>
  </section>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

};
export default SearchBar;

  

