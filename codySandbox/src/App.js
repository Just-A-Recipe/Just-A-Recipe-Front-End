import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchOptions from './SearchOptions.js';
import RecipeList from './RecipeList.js';
import Paging from './Paging.js';
import getRecipe from './SpoonApi.js'
export default class App extends Component {
  state = { recData: [] }
  async loadRecipe() {
    const response = await getRecipe();
    const recData = response.results;
    const totalResults = response.count;
    this.setState({
      recData: recData,
      totalResults: totalResults,
    });
  }
  async componentDidMount() {
    await this.loadRecipe();
    window.addEventListener('hashchange', async () => {
      await this.loadRecipe();
    })
  }

render() {
  const { recData, totalResults } = this.state;
  return (
    <div>
      <Header />
      <SearchOptions />
      <Paging totalResults={totalResults} />
      <RecipeList recipe={recData} />
      <Footer />
    </div>
  );
}
}