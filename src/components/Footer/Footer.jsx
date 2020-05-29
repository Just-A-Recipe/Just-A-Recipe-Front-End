import React, { Component } from 'react';
import styles from './Footer.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.footerDiv}>
        <div className={styles.container}>
          <a href="https://github.com/Just-A-Recipe" className={styles.linksGit}>
            <img className={styles.imgs} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="GitHub"></img>
          </a>
          <a href="https://www.alchemycodelab.com/" className={styles.linksAlc}>
            <img className={styles.imgs} src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/983693/axmqlpjyo3zmeszdr9qt.png" alt="Alchemy Code Lab"></img>
          </a>
          <a href="https://spoonacular.com/food-api" className={styles.linksSpoon}>
            <img className={styles.imgs} src="https://spoonacular.com/images/spoonacular-logo-b.svg" alt="Spoonacular API"></img>
          </a>
        </div>
      </div>
    );
  }
}
