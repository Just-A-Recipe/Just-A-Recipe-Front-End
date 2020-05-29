import React, { useEffect, useState } from 'react';
import styles from './Header.css';
import { NavLink, withRouter, Link, useHistory } from 'react-router-dom';
import firebase from '../Firebase/Firebase';
import { getUserFavorites } from '../../services/spoonacular';
import Logo from '../../assets/logo2.png';

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
  
  return (
    <>
      {loggedIn ?  
        (<div className={styles.UserControls}>
          <Link className={styles.name} onClick={() => getUserFavorites(firebase.getCurrentEmail())} to='/favorites'>{user.displayName}</Link>
          <button onClick={() => handleLogout()}>Log Out</button>
        </div>) : null}
      <div className={styles.headerDiv}>
        <img className={styles.logo} src={Logo} alt=''/>
        <NavLink to="/" className={styles.link}>Recipes</NavLink> 
        <NavLink to="/register" className={styles.link}>Register</NavLink>
        <NavLink to="/login" className={styles.link}>Log In</NavLink>
        <NavLink to="/about" className={styles.link}>Contact Us</NavLink> 
        <NavLink to="/Favorites" className={styles.link}>Favorites</NavLink>
      </div>
    </>
  );   
};

export default withRouter(Header);
