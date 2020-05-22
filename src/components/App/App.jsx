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


import RecipeViewer from '../containers/RecipeList/RecipeViewer';





export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={RecipeViewer} />
          </Switch>
        </Router>
      </div>
    );
  }
}
