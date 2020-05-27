import React, { Component } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
        <NavLink to="/" className={styles.link}>Recipes  </NavLink> 
        <NavLink to="/login" className={styles.link}>Log In   </NavLink>
        <NavLink to="/register" className={styles.link}>Register   </NavLink>
        <NavLink to="/about" className={styles.link}>About Us</NavLink> 
      </div>
    );
    
  }
}
