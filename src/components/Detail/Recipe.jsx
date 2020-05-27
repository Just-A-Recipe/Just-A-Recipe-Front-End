import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.css'

const Recipe = ({ image, title, ingredients, instructions }) => {
  const instructionElements = instructions[0].steps.map(instruction => (
    <div className='instructions-table' key={instruction.id}>
      <p> {instruction.step} </p>
    </div>
  ));

  const ingredientsElements = ingredients.map(ingredient => (
    <div className='ingredients-table' key={ingredient.id}>
      <p>{ingredient.original}</p>
    </div>
  ));

  return (
    <div>
      <div>
        <img className={styles.image} src={`${image}`} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <section className={styles.section}>
        <p className={styles.thingsTitle}>Ingredients</p>
        {ingredientsElements}
        <p className={styles.thingsTitle}>Instructions</p>
        {instructionElements}
      </section>
    </div>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.object),
    instructions: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default Recipe;
