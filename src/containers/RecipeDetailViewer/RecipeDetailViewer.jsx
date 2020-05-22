import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { fetchRecipe } from '../../services/spoonacularAPIfetch';
import Recipe from '../../components/Detail/Recipe';

const RecipeDetailViewer = ({ match }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe(match.params.id)
      .then(recipe => setRecipe(recipe));
  }, []);

  if(!recipe) 
    return <h1>Loading</h1>;

  //will probablyw ant to use reciple List formatted into an array
  return <Recipe 
    name={recipe.title}
    image={recipe.image}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
    measures={recipe.measures}
  />;
};

RecipeDetailViewer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default RecipeDetailViewer;
