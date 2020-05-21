import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions }) => (
  <fugure>
    <img src={image}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
    <p>{instructions}</p>
  </fugure>
);

Recipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    measures: PropTypes.object.  
  }))
};

export default Recipe;
//ingredients is an array of objs and also instructions. We have to figure out how to make thos proptypes. 