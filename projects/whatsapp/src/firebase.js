import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyA4w5pT5hlkadHeGVE69VRAm-fuRj3NXj8",
    authDomain: "react-firebase-c6c22.firebaseapp.com",
    projectId: "react-firebase-c6c22",
    storageBucket: "react-firebase-c6c22.appspot.com",
    messagingSenderId: "935045012888",
    appId: "1:935045012888:web:754e5f4510e9f2b3c41fed"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default firebase;
export {auth, firestore};