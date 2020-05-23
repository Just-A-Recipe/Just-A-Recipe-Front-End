import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange, onSubmit, inputName = '', buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={text} name={inputName} onChange={onChange} />
    <button>{buttonText}</button> 
  </form>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequried,
  onSubmit: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  buttonText: PropTypes.string
};
export default SearchBar;
