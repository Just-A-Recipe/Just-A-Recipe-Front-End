import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, onChange, onSubmit, inputName = 'text', buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={text} name={inputName} onChange={onChange} />
    <button>{buttonText}</button> 
  </form>
);

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  buttonText: PropTypes.string
};
