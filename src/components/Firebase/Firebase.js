// babel-polyfill is a bit aggressive for just one async/await
// import 'babel-polyfill'
import React, { createContext, useState, useEffect, useContext } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
// you're not using firestore in your app
// import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAZR8BDc_uMY92DU56AS_5n8qjSCN_Ibc',
  authDomain: 'just-a-recipe.firebaseapp.com',
  databaseURL: 'https://just-a-recipe.firebaseio.com',
  projectId: 'just-a-recipe',
  storageBucket: 'just-a-recipe.appspot.com',
  messagingSenderId: '101040988144',
  appId: '1:101040988144:web:ad4159e1b36637630d4735',
  measurementId: 'G-CYJ1PY9DC1'
};

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  app.initializeApp(firebaseConfig);
  const auth = app.auth();

  // setup a watcher onAuthStateChange
  // whenever a user logs in set your user state
  useEffect(() => {
    return auth.onAuthStateChanged(user => setUser(user));
  }, []);

  const register = (displayName, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(() => auth.currentUser.updateProfile({ displayName }));
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  }

 return (
   <FirebaseContext.Provider value={{ user, register, login, logout }}>
     {children}
   </FirebaseContext.Provider>
 );
};

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext);
  return firebase;
};

export const useCurrentUser = () => {
  const { user } = useFirebase();
  return user;
};

export const useRegister = () => {
  const { register } = useFirebase();
  return register;
};

export const useLogin = () => {
  const { login } = useFirebase();
  return login;
};

export const useLogout = () => {
  const { logout } = useFirebase();
  return logout;
};

export const useCurrentUsername= () => {
  const user = useCurrentUser();
  return user?.displayName;
};

export const useCurrentEmail = () => {
  const user = useCurrentUser();
  return user?.email;
}

// a singleton is a good way to do this
// but i think its better to use React context for this type of
// stuff. It will integrate a little better
// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//     this.db = app.firestore();
//   }
//   login(email, password) {
//     return this.auth.signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     return this.auth.signOut();
//   }

//   async register(name, email, password) {
//     console.log(name, email, password);
//     await this.auth.createUserWithEmailAndPassword(email, password);

//     return this.auth.currentUser.updateProfile({
//       displayName: name
//     });
//   }

//   isInitialized() {
//     // this is dangerous. onAuthStateChanged invokes its callback
//     // whenever state changes. But resolve expects to only get called
//     // once
//     return new Promise(resolve => {
//       this.auth.onAuthStateChanged(resolve);
//     });
//   }

//   onAuthStateChanged(fn) {
//     return this.auth.onAuthStateChanged(fn);
//   }

//   getCurrentEmail() {
//     return this.auth.currentUser && this.auth.currentUser.email;
//   }

//   getCurrentUsername() {
//     return this.auth.currentUser && this.auth.currentUser.displayName;
//   }
// }

// export default new Firebase();
