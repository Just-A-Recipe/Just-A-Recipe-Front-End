export const fetchRecipes = searchQuery => {
  return fetch(`https://just-a-recipe.herokuapp.com/api/v1/recipes?searcQuery=${searchQuery}`)
    .then(res => res.json());
};
