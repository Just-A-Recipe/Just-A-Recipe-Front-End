import React from 'react';
import PropTypes from 'prop-types';



const SearchBar = ({ searchQuery, onChange, onSearch, checked }) => (
  <section>
    <form onSubmit={onSearch}>
      <input type="text" value={searchQuery} onChange={onChange} />
      <button>Search</button> 
      <input type="checkbox" value={checked} />
    </form>
  </section>
);

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,

};
export default SearchBar;
