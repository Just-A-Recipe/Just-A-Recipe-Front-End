import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import RecipeViewer from '../../containers/RecipeList/RecipeViewer';
import RecipeDetailViewer from '../../containers/RecipeDetailViewer/RecipeDetailViewer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import About from '../About/About';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import firebase from '../Firebase/Firebase';
import Favorites from '../../containers/FavoriteList/FavoriteListViewer';

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  });
  
  return firebaseInitialized !== false ? (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={RecipeViewer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:id" component={RecipeDetailViewer} />
      </Switch>
      <Footer />
    </Router>
  ) : <div>Loading...</div>;
}
