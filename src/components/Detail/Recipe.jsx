import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.css'

const Recipe = ({ image, title, ingredients, instructions }) => {
  // console.log(image, title);
  const instructionElements = instructions[0].steps.map(instruction => (
    <div key={instruction.id}>
      <p> {instruction.step} </p>
    </div>
  ));

  const ingredientsElements = ingredients.map(ingredient => (
    <div key={ingredient.id}>
      <p> {ingredient.original}</p>
    </div>
  ));

  return (
    <div>

      <div className={styles.imageDiv}>
        <img className={styles.image} src={`${image}`} />
        <h2 className={styles.mainTitle}>{title}</h2>
      </div>

      <section className={styles.theSection}>

        <div className={styles.ingredients}>
          <p className={styles.titles}>Ingredients</p>
          {ingredientsElements}
        </div>

        <div className={styles.instructions}>
          <p className={styles.titles}>Instructions</p>
          {instructionElements}
        </div>

      </section>
    </div>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    instructions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired
};

export default Recipe;
