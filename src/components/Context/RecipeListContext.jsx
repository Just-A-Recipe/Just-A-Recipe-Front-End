import React, {useContext, useState } from 'react';
import { createContext } from 'react';

export const RecipeContext = createContext();

const RecipeListContextProvider = () => {
  const [myRecipes, setMyRecipes] = useState([
    { recipe: 'chocolate chips',
      image:'cookie-img.png',
      notes: 'They are the best'
    },
    { recipe: 'chocolate cake',
      image:'cake-img.png',
      notes: 'this is the best'
    },
    { recipe: 'pancakes',
      image:'pancake-img.png',
      notes: 'this is the best'
    }
  ]);
  return <div>My Recipe List</div>;
};

export default RecipeListContextProvider;
