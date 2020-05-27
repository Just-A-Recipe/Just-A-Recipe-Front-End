import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import RecipeViewer from '../../containers/RecipeList/RecipeViewer';
import RecipeDetailViewer from '../../containers/RecipeDetailViewer/RecipeDetailViewer';
import About from '../About/About';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return ( 
      <Router>
        <Header />
  
        <Switch>
          <Route exact path="/" component={RecipeViewer} />
          <Route exact path="/:id" component={RecipeDetailViewer} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    ); 
  }
}
export default App;
