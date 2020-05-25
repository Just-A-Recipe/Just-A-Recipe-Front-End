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

//***Informaiton below is based off recipes/${id}/information?{&apiKey=blahblahblah}
//extendedIngredients: name & measures.us.amount & measures.us.unitLong  
//image: image
//title: title
//ingredients: extendedIngredients.name (multiple)
//measures: extendedIngredients.measures.us.amount & extendedIngredients.measures.us.unitLong
//instructions: instructions (will have to see how the data comes out as it have \n and others have br)
Recipe.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired, 
  measures: PropTypes.object.isRequired,
  instructions: PropTypes.string.isRequired
};

export default Recipe;
 
