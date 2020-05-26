import React, { Component } from 'react';
import styles from './Header.css';


export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerDiv}>
        <h1>Just a Recipe</h1>
      </div>
    );
  }
}
