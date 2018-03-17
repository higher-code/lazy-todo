import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// Firebase
import * as firebase from 'firebase';
// Custom
import { App } from 'components';
/**
 * @Warning Config not managed by git
 */
import users from 'config/users'; 
import firebaseConfig from 'config/firebase';

firebase.initializeApp(firebaseConfig);

let email = users.qvil.email;
let password = users.qvil.password;

// Login
firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
  let errorCode = error.code;
  let errorMessage = error.message;

  console.error(errorCode, errorMessage);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
