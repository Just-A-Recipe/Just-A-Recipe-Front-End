import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imgIcon from '../../assets/favorite.png';
// import secondFavIcon from '../../assets/star.png';
import { addFavorite } from '../../services/spoonacular';
import firebase from '../Firebase/Firebase';
  
import styles from './Recipe.css'

const Recipe = ({ image, title, ingredients, instructions, id }) => {
  // console.log(image, title);
  const [ message, setMessage ] = useState('');
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
  const handleAddFavorite = (id) => {
    addFavorite(firebase.getCurrentEmail(), parseInt(id))
      .then(res => {
        
        setMessage(`${res.id} Added to Favorites!`);
      }).catch(err => {
        console.error(err)
      });
  };
  return (
    <div>
      <div className={styles.imageDiv}>
      <img onClick={() => handleAddFavorite(id)} className={styles.icon} src={imgIcon} alt=''/>
      {message}
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
