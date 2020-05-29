import React, { useState } from 'react';
import styles from './login.css';
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../components/Firebase/Firebase';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await firebase.login(email, password);
      props.history.replace('/');
    } catch(error) {
      console.error(error);
    }
  };
  
  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundImage}>
        <div className={styles.loginPaper}>
          <h1 className={styles.header}>Login</h1>
          <div className={styles.card}>
            <form id="login-form">
              <input className={styles.input} type="text" placeholder='email' name="email" onChange={(e) => {setEmail(e.target.value);}}>
              </input>
              <input className={styles.input} type="password" placeholder='password' name="password" onChange={(e) => {setPassword(e.target.value);}}>
              </input>
              <button className={styles.submit} onClick={handleSubmit}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
