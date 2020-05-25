// import React from 'react';
// import PropTypes from 'prop-types';



// const SearchBar = ({ searchQuery, onChange, onSearch }) => (
//   <section>
//     <form onSubmit={onSearch}>
//       <input 
//         type="text" 
//         value={searchQuery} 
//         onChange={onChange} />
//       <button>Search</button> 
//     </form>
//   </section>
// );

// SearchBar.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequried,
//   onSearch: PropTypes.func.isRequired,

// };
// export default SearchBar;

  
import React, { useState } from 'react';

const SearchBar = ({ searchQuery }) => {
  const [query, setQuery] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    searchQuery(query);
  };
  return (
    <section>
      <form id="submit" onSubmit={onSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          required
        /></form>
      <button type="submit" ></button>
    </section>
  );};

export default SearchBar;
