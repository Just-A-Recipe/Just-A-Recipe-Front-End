const API_URL = `https://just-a-recipe.herokuapp.com/api/v1/`
// const API_URL = 'http://localhost:7890/api/v1/';

export const fetchRecipes = (searchQuery, offset) => {
  return fetch(`${API_URL}recipes/?searchQuery=${searchQuery}&offset=${offset}`)
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
  return fetch(`${API_URL}recipes/${id}`)
  
    .then(res => res.json())
    .then(json => ({
      title: json.title,
      image: json.image,
      extendedIngredients: json.extendedIngredients,
      analyzedInstructions: json.analyzedInstructions,
      instructions: json.instructions
    }));
};

export const fetchRecipeImage = image => {
  return fetch (`${API_URL}recipeimages/${id}-312x231.jpg`)
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


export const addFavorite = (userEmail, recipeId) => {
  return fetch (`${API_URL}favorites`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userEmail: userEmail, recipeId: recipeId }) })
    .then(res => 
      res.json()
    )
    .then(json => ({
      message: 'Recipe added successfully',
      id: json.recipeId

    })).catch((err) => {
     
    });

};

export const deleteFavorite = (favId) => {
  return fetch (`${API_URL}favorites/${favId}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(json => ({
      message: json.message
    }));
};

export const getUserFavorites = (userEmail) => {
  return fetch (`${API_URL}favorites/${userEmail}`)
    .then(res => res.json()).then((json) => ({
      body: json
      // console.log(JSON.stringify(json))
    }));
 
};
