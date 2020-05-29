import React, { useEffect, useState } from 'react';
import styles from './Header.css';
import { NavLink, withRouter, Link, useHistory } from 'react-router-dom';
import firebase from '../Firebase/Firebase';
import { getUserFavorites } from '../../services/spoonacular';

const Header = () => {
  const { history } = useHistory();
  const [user, setUser] = useState(null); 
  const loggedIn = !!user;
  useEffect(() => {
    return firebase.onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  const handleLogout = () => {
    firebase.logout();
    history.push('/');
  };

  const loginLogout = loggedIn ? null : <NavLink to="/login" className={styles.link}>Log In</NavLink>;
  return (
    <>
      {loggedIn ?  
        (<div className={styles.UserControls}>
          <Link onClick={() => getUserFavorites(firebase.getCurrentEmail())} to='/favorites'>See {user.displayName} Favorites</Link>
          <button onClick={() => handleLogout()}>Log Out</button>
        </div>) : null}
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
        <NavLink to="/" className={styles.link}>Recipes</NavLink> 
        {loginLogout}
        <NavLink to="/register" className={styles.link}>Register</NavLink>
        <NavLink to="/about" className={styles.link}>Contact Us</NavLink> 
      </div>
    </>
  );   
};

export default withRouter(Header);
