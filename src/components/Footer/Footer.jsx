import React, { Component } from 'react';
import styles from './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footerDiv}>
        <h5 className={styles.contact}>Contact Us</h5>
      </div>
    );
  }
}
