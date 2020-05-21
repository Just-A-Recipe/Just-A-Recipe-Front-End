import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients }) => (
  <fugure>
    <img src={image}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
  </fugure>
);

Recipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
};

export default Recipe;
