import React from 'react';
import PropTypes from 'prop-types';



const SearchBar = ({ searchQuery, onChange, onSearch }) => (
  <section>
    <form onSubmit={onSearch}>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={onChange} />
      <button>Search</button> 
    </form>
  </section>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequried,
  onSearch: PropTypes.func.isRequired,

};
export default SearchBar;

  

