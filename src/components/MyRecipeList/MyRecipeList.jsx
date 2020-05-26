import React, { useContext } from 'react';
import { RecipeListContext } from '../Context/RecipeListContext';
import Recipe from '../MyRecipe/MyRecipe';

const MyRecipeList = () => {
  const { myRecipes } = useContext(RecipeListContext);
  return <div>
    <ul> 
      {myRecipes.map(myRecipe => {
        return <Recipe/>;
      })}
    </ul>
  </div>;
};

export default MyRecipeList;
