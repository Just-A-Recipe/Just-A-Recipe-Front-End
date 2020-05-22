import fetchRecipes from './spoonacularAPIFetch';

describe ('spoonacular api fetch call', () => {
  it('fetchs a list of recipes', () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({
        results: [{
          title: 'pizza',
          image: 'someimage'
        },
        {
          title: 'Better Pizza',
          image: 'bc it has pineapples'
        }]
      })
    });
  });

  return fetchRecipes()
    .then(recipes => {
      expect(recipes).toEqual([{
        title: 'pizza',
        image: 'someimage'
      }, {
        title: 'Better Pizza',
        image: 'bc it has pineapples'
      }]);
    });
});
