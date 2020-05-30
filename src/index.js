import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { FirebaseProvider } from './components/Firebase/Firebase';

render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>,
  document.getElementById('root')
);
