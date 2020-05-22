import React, { Component } from 'react';
import { BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
// import './App.css';
// import Home from './Home.js';
// import AboutUs from './AboutUs.js';



export default class App extends Component {
  render() {
    return (
      <Router>


        <div>
          {/* <Route exact path ='/' component={Home}/> */}
          <div>
            <img src="https://media.tenor.com/images/213a4c8c6fb278cf2fb10bcc0da1b68d/tenor.gif"></img>
          </div>
          {/* <Route exact path ='/about-us' component={AboutUs}/> */}
        </div>
        
        
      </Router>
    );
  }
}
