require('dotenv').config();

export const fetchRecipe = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/recipes`)
    .then(res => res.json());
};
