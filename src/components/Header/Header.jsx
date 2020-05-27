import React, { Component } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
        <NavLink to="/about">About</NavLink> 
      </div>
    );
    
  }
}
