export const fetchRecipes = (searchQuery) => {
  return fetch(`http://localhost:7890/api/v1/recipes/?searchQuery=${searchQuery}`)
    .then(res => res.json())
    .then(json => json.map(({ id, title, image }) => ({
      id,
      title,
      image
    })));
};

export const fetchRecipe = (id) => {
  return fetch(`http://localhost:7890/api/v1/recipes/${id}`)
    .then(res => res.json())
    .then(json => ({
      title: json.title,
      image: json.image,
      ingredients: json.ingredients,
      measures: json.measures,
      instructions: json.instructions
    }));
};
export const fetchRecipeImage = image => {
  return fetch (`http://localhost:7890/ap/v1/recipeimages/${id}-312x231.jpg`)
    .then(res => res.json(image))
    .then(json => ({
      image: json.image
    }));
};
