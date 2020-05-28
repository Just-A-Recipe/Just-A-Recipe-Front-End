import React, { Component, useEffect, useState } from 'react';
import styles from './Header.css';
import { NavLink, withRouter } from 'react-router-dom';
import firebase from '../Firebase/Firebase';
import { getUserFavorites } from '../../services/spoonacular';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    console.log('header', firebase.getCurrentUsername())
    if(firebase.getCurrentUsername()){
      console.log('here', firebase.getCurrentUsername())
      setLoggedIn(true)
    }
  }, []);
  const handleLogout = () => {
    firebase.logout();
    setLoggedIn(false);
  };
  
  // const logoutBtn = loggedIn ?  
  //   (<div className={styles.UserControls}>
  //     <button onClick={() => firebase.logout()}>Log Out</button>
  //   </div>) : null;

  const loginLogout = loggedIn ? null : <NavLink to="/login" className={styles.link}>Log In   </NavLink>;
  return (
    <>
      {loggedIn ?  
        (<div className={styles.UserControls}>
          <button onClick={() => getUserFavorites(firebase.getCurrentEmail())}>See Favorites</button>
          <button onClick={() => handleLogout()}>Log Out</button>
        </div>) : null}
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
        <NavLink to="/" className={styles.link}>Recipes  </NavLink> 
        {loginLogout}
        <NavLink to="/register" className={styles.link}>Register   </NavLink>
        <NavLink to="/about" className={styles.link}>About Us</NavLink> 
      </div>
    </>
  );
    
  
};

export default withRouter(Header)
