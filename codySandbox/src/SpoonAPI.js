const URL = 'https://just-a-recipe.herokuapp.com/';
export default async function getRecipe() {
  let queryString = window.location.hash.slice(1);
  const url = `${URL}${queryString}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.Response === 'False') {
    return {
      search: [],
      totalResults: 0
    };
  }
  return data;
}
