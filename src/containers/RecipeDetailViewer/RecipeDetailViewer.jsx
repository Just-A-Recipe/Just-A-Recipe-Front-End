import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { fetchRecipe } from '../../services/spoonacular';
import Recipe from '../../components/Detail/Recipe';

const RecipeDetailViewer = ({ match }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe(match.params.id)
      .then(recipe => setRecipe(recipe));
   
    
      
  }, []);

  if(!recipe) 
    return <h1>Loading</h1>;

  //will probably want to use recipe List formatted into an array

  console.log(recipe.analyzedInstructions);
  return <Recipe 
    title={recipe.image}
    image={recipe.image}
    ingredients={recipe.extendedIngredients}
    instructions={recipe.analyzedInstructions}
  />;
};

RecipeDetailViewer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
      instructions: PropTypes.string.isRequired,
      measures: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default RecipeDetailViewer;
