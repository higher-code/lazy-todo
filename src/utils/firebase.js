import * as firebase from 'firebase';

/**
 * Set data using user id
 * @param {String} userId 
 * @param {Object} data 
 */
export function setData(userId, data) {
  firebase.database().ref(`users/${userId}`).set(data);
};

// export get isSigned() { return firebase.auth().currentUser };

export default class firebaseHandler {
  // signIn() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       let data = {
  //         email: user.email,
  //       };
  //       setData(user.uid, data);
  //     }
  //     else {
  //       console.log("else")
  //     }
  //   });
  // }
  // Login
  signIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.error(errorCode, errorMessage);
    });
  }
  get isSigned() { return firebase.auth().currentUser };
};