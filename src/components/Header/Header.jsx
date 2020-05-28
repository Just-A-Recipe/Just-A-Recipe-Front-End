import React, { useEffect, useState } from 'react';
import styles from './Header.css';
import { NavLink, withRouter, Link } from 'react-router-dom';
import firebase from '../Firebase/Firebase';
import { getUserFavorites } from '../../services/spoonacular';

const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
   
    if(firebase.getCurrentUsername()){
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    firebase.logout();
    setLoggedIn(false);
    props.history.push('/');
  };

  const loginLogout = loggedIn ? null : <NavLink to="/login" className={styles.link}>Log In</NavLink>;
  return (
    <>
      {loggedIn ?  
        (<div className={styles.UserControls}>

          <Link onClick={() => getUserFavorites(firebase.getCurrentEmail())} to='/favorites'>See Favorites</Link>

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

export default withRouter(Header);

