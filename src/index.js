import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// Firebase
import * as firebase from 'firebase';
// Custom
import { App } from 'components';
import 'styles/main.scss';
/**
 * @Warning Config not managed by git
 */
// import users from 'config/users'; 
import firebaseConfig from 'config/firebase';

firebase.initializeApp(firebaseConfig);

// let email = users.qvil.email;
// let password = users.qvil.password;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
