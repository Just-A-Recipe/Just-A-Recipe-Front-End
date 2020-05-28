export const fetchRecipes = (searchQuery, offset) => {
  return fetch(`https://just-a-recipe.herokuapp.com/api/v1/recipes/?searchQuery=${searchQuery}&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.map(({ id, title, image, extendedIngredients, analyzedInstructions }) => ({
      id,
      title,
      image,
      extendedIngredients,
      analyzedInstructions
    })));
};

export const fetchRecipe = (id) => {
  return fetch(`https://just-a-recipe.herokuapp.com/api/v1/recipes/${id}`)
    .then(res => res.json())
    .then(json => ({
      title: json.title,
      image: json.image,
      extendedIngredients: json.extendedIngredients,
      analyzedInstructions: json.analyzedInstructions,
      instructions: json.instructions
    }));
  // console.log(analyzedInstructions);
};

export const fetchRecipeImage = image => {
  return fetch(`https://just-a-recipe.herokuapp.com/ap/v1/recipeimages/${id}-312x231.jpg`)
    .then(res => res.json(image))
    .then(json => ({
      image: json.image
    }));
};

export const fetchGlutenFree = (searchQuery, offset) => {
  return fetch(`https://just-a-recipe.herokuapp.com/api/v1/recipes/?searchQuery=${searchQuery}&offset=${offset}&intolerances=Gluten`)
    .then(res => res.json())
    .then(json => json.map(({ id, title, image, extendedIngredients, analyzedInstructions }) => ({
      id,
      title,
      image,
      extendedIngredients,
      analyzedInstructions
    })));
};

