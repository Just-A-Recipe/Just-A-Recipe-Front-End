import React, {useState} from 'react'
import styles from './login.css'
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
  const handleSubmit = async (e) => {
    try {
      await firebase.login(email,password)
      props.history.replace('/')
    } catch(error) {
      console.error(error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-paper">
        <form id="login-form">
          <h1>Login</h1>
          <input type="text" placeholder='email' name="email" onChange={handleChange}>
          </input>
          <input type="password" placeholder='password' name="password" onChange={handleChange}>
          </input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Login);
