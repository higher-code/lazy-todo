import * as firebase from 'firebase';

/**
 * Set data using user id
 * @param {String} userId 
 * @param {Object} data 
 */
export function setData(userId, data) {
  firebase.database().ref(`users/${userId}`).set(data);
};