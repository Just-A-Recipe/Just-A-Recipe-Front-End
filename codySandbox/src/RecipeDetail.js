import React, { Component } from 'react'

export default class RecipeDetail extends Component {
  render() {
    return(

      <div className="onTheRecipeCard">
        <h2 className="recipeName">{this.props.recipe.title}</h2>
        <img className="recipeImage">{this.props.recipe.image}</img>
        <p className="recipeIngredients">{this.props.recipe.ingredients}</p>
        <p className="recipeMeasures">{this.props.recipe.measures.us}</p>
        <p className="recipleInstructions">{this.props.recipe.instructions}</p>
      </div>
    )
  }
}