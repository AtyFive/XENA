import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9IokY0tntOcmxuJyVCNhtjsQwOLevVOY",
  authDomain: "xena-f7273.firebaseapp.com",
  databaseURL: "https://xena-f7273.firebaseio.com",
  projectId: "xena-f7273",
  storageBucket: "xena-f7273.appspot.com",
  messagingSenderId: "168940237725",
  appId: "1:168940237725:web:2e693fe9814fa867cbf574"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, projectAuth, timestamp };


  