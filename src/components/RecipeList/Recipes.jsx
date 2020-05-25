import React from 'react';
import PropTypes from 'prop-types';

const Recipes = ({ title, }) => (
  <figure>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
  </figure>
);

Recipes.propTypes = {
  
  title: PropTypes.string,
};

export default Recipes;
