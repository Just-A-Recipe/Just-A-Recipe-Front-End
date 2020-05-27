import React, {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../components/Firebase/Firebase';
import PropTypes from 'prop-types';

function Register(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.register(name, email, password);
      props.history.replace('/');
    } catch(error) {
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <div className="register-paper">
        <form id="register-form">
          <h1>Register</h1>
          <input type="text" placeholder='name' name="name" onChange={e => (setName(e.target.value))}>
          </input>
          <input type="text" placeholder='email' name="email" onChange={e => setEmail(e.target.value)}>
          </input>
          <input type="password" placeholder='password' name="password" onChange={e => setPassword(e.target.value)}>
          </input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
  
Register.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Register);

