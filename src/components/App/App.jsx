import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import RecipeViewer from '../../containers/RecipeList/RecipeViewer';
import RecipeDetailViewer from '../../containers/RecipeDetailViewer/RecipeDetailViewer';
import Login from '../Login/Login';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={RecipeViewer} />
        <Route exact path="/:id" component={RecipeDetailViewer} />
      </Switch>
      <Footer />
    </Router>
  );
}
