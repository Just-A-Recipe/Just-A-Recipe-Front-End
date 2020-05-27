import React, { Component } from 'react';
import styles from './Footer.css';


export default class Header extends Component {
  render() {
    return (
      <div className={styles.footerDiv}>
        <h5>Contact Us</h5>
        <h5>Alchemy Code Lab</h5>
      </div>
    );
  }
}
