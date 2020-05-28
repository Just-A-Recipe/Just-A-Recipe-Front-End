import React, { Component } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';
import firebase from '../Firebase/Firebase';



export default class Header extends Component {
  // state = {
  //   loggedIn: false
  // }
  render() {
    const loginLogout = firebase.currentUser ? <button>Log Out</button> : <NavLink to="/login" className={styles.link}>Log In   </NavLink>;
    return (
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
        <NavLink to="/" className={styles.link}>Recipes  </NavLink> 
        {loginLogout}
        <NavLink to="/register" className={styles.link}>Register   </NavLink>
        <NavLink to="/about" className={styles.link}>About Us</NavLink> 
      </div>
    );
    
  }
}
