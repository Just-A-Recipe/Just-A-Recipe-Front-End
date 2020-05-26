// import React from 'react';
// import PropTypes from 'prop-types';
// import RecipeList from '../RecipeList/RecipeList';


// const RecipeDetail =  ({ recipes }) => {
//   const detailElelments = recipes.map(recipe =>
//     console.log(recipe, '|||||||||///|||||?/|||'));
  
//   return detailElelments;  
// };

// export default RecipeDetail;


import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ( image, title, ingredients, instructions ) => {
  const detailElelments = instructions.map(instruction => (
    <li key={instruction.id}>
      <p> {instruction} </p>
    </li>
  ));
  // console.log(Recipe, '|||||||||||recipe');
  
  return (
    <ul>
      {detailElelments}
    </ul>
  );
};

export default Recipe;




//   return (/* extended is a list  &&&& anzalied is a list aslo */
//     <figure>
//       <img src={`${Recipe.image}`}/>
//       <figcaption>
//         <h2>{Recipe.title}</h2>
//       </figcaption>
//       <p>{Recipe.ingredients}</p>
//       <p>{Recipe.measures}</p>
//       <p>{Recipe.analyzedInstructions}</p>
//     </figure>
//   );
// };

Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    measures: PropTypes.object,
    instructions: PropTypes.string
  })
};

// export default Recipe;
 
