import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imgIcon from '../../assets/favorite.png';
import secondFavIcon from '../../assets/star.png';
import {  withRouter } from 'react-router-dom';
import { addFavorite, deleteFavorite, getUserFavorites } from '../../services/spoonacular';
import firebase, { useCurrentEmail } from '../Firebase/Firebase';
import styles from './Recipe.css';

const Recipe = ({ image, title, ingredients, instructions, id }) => {
  const currentUserEmail = useCurrentEmail();
  const [message, setMessage] = useState('');
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    getUserFavorites(currentUserEmail)
      .then(fetchedFavorite => {
        // it would be better to do this on your backend
        // make a route to get a user favorite by userEmail and recipeId
        const favorite = fetchedFavorite.find(({ recipeId }) => recipeId === +id);
        // store the favorite object so you don't have to search for it later
        setFavorite(favorite);
      });
  }, []);

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
    // exit early
    if(!currentUserEmail) return setMessage('Login / Create Account to Add to Favorites!');
    setFavorite(true);
    addFavorite(currentUserEmail, parseInt(id))
      .then(() => {
        setMessage('Recipe Added to Favorites!');
      }).catch(err => {
        console.error(err);
      });
  };

  const handleDeleteFavorite = (id) => {
    if(!favorite) return;
    setFavorite(false);
    deleteFavorite(favorite._id)
      .then(res => setMessage(res.message))
      .catch(console.error);
  };

  return (
    <div>
      <div className={styles.imageDiv}>
        {!favorite && <img onClick={() => handleAddFavorite(id)} className={styles.icon} src={imgIcon} alt=''/>}
        {favorite && <img onClick={() => handleDeleteFavorite(id)} className={styles.icon} src={secondFavIcon} alt=''/>}
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
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  instructions: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(Recipe);
