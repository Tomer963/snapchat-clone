import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAumGFc2JPm1i2xLpOK0IBwTZ19McKMqic',
  authDomain: 'snapchat-clone-40780.firebaseapp.com',
  projectId: 'snapchat-clone-40780',
  storageBucket: 'snapchat-clone-40780.appspot.com',
  messagingSenderId: '1016374673980',
  appId: '1:1016374673980:web:457ad0b260991076fef939',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
