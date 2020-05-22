import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ image, title, ingredients, instructions, measures }) => (
  <figure>
    <img src={image}/>
    <figcaption>
      <h2>{title}</h2>
    </figcaption>
    <p>{ingredients}</p>
    <p>{measures}</p>
    <p>{instructions}</p>
  </figure>
);

Recipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })),
  measures: PropTypes.object(PropTypes.shape({
    amount:PropTypes.string.isRequired,
    us: PropTypes.string.isRequired
  })),
  instructions: PropTypes.string.isRequired
};

export default Recipe;
//ingredients is an array of objs and also instructions. We have to figure out how to make thos proptypes. 
