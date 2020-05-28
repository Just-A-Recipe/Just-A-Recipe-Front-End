import React, { useState } from 'react';
import styles from './login.css';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../components/Firebase/Firebase';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    e.target.value === 'email' ? setEmail(e.target.value) : null;
    e.target.value === 'password' ? setPassword(e.target.value) : null;
  };
  const handleSubmit = async(e) => {
    try {
      await firebase.login(email, password);
      props.history.replace('/');
    } catch(error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.header}>Login</h1>
      <div className={styles.loginPaper}>
        <div className={styles.card}>
          <form id="login-form">
            <input className={styles.input} type="text" placeholder='email' name="email" onChange={handleChange}>
            </input>
            <input className={styles.input} type="password" placeholder='password' name="password" onChange={handleChange}>
            </input>
            <button className={styles.submit} onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
