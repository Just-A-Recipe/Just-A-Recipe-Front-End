import React, { Component } from 'react';
import RecipeDetail from "./RecipeDetail.js";

export default class RecipeList extends Component {
  render() {
    const { recipe } = this.props;
    const recipeList = recipe.map(item => {
        return <RecipeDetail recipe={item} />
    })
      return (
        <ul className="mainDiv">
          {recipeList}
        </ul>
      )
  }
}
