import React, { Component } from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
// import './App.css';
// import Home from './Home.js';
// import AboutUs from './AboutUs.js';
import SearchBar from './Search/SearchBar';




export default class App extends Component {
  render() {
    return (


      <Router>



      <div>
        {/* <Route exact path ='/' component={Home}/> */}
        <div>
          <Home />
          {/* <Route exact path ='/' component={Home}/> */}
     
          {/* <Route exact path ='/about-us' component={AboutUs}/> */}
        </div>
        {/* <Route exact path ='/about-us' component={AboutUs}/> */}
      </div>
        
        
    // </Router>
    );
  }
}
