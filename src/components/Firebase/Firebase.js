import 'babel-polyfill'
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAZR8BDc_uMY92DU56AS_5n8qjSCN_Ibc',
  authDomain: 'just-a-recipe.firebaseapp.com',
  databaseURL: 'https://just-a-recipe.firebaseio.com',
  projectId: 'just-a-recipe',
  storageBucket: 'just-a-recipe.appspot.com',
  messagingSenderId: '101040988144',
  appId: '1:101040988144:web:ad4159e1b36637630d4735',
  measurementId: 'G-CYJ1PY9DC1'
}
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()
  }
//the this. auth... is the firebase api 
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    console.log(name, email, password)
    await this.auth.createUserWithEmailAndPassword(email, password)
    
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }


  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
