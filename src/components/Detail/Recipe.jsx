import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imgIcon from '../../assets/favorite.png';
// import secondFavIcon from '../../assets/star.png';
import { addFavorite } from '../../services/spoonacular';
import firebase from '../Firebase/Firebase';

import styles from './Recipe.css';

const Recipe = ({ image, title, ingredients, instructions, id }) => {

  const [ message, setMessage ] = useState('');
  const instructionElements = instructions[0].steps.map(instruction => (
    <div className='instructions-table' key={instruction.id}>
      <p> {instruction.step} </p>
    </div>
  ));

  const ingredientsElements = ingredients.map(ingredient => (
    <div className='ingredients-table' key={ingredient.id}>
      <p> {ingredient.original}</p>
    </div>
  ));
  const handleAddFavorite = (id) => {
    addFavorite(firebase.getCurrentEmail(), parseInt(id))
      .then(res => {
        
        setMessage(`${res.id} Added to Favorites!`);
      }).catch(err => {
      });
  };
  return (
    <div>
      <div className={styles.Recipe} >
        <h2>{title}</h2>
        
        <img onClick={() => handleAddFavorite(id)} className={styles.icon} src={imgIcon} alt=''/>
        
        {/* <img className={styles.icon} src={secondFavIcon} alt=''/> */}
        <img className={styles.detailImg}  src={`${image}`} />
        {message}
      </div>
      <section>
        <li>
          {ingredientsElements}
        </li>
        <ul className={styles.instructions} >
          {instructionElements}
        </ul>
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
