import React, { Component } from 'react';
import styles from './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerDiv}>
        <h1 className={styles.heading}>Just a Recipe</h1>
        {/* !!!!!!!!! this one is the for the slide bar 
        <h1 className={styles.title}>
        <span>Just a Recipe</span>
        </h1> */}
      </div>
    );
  }
}
