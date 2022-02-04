import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyaLdnT1RC8XvVlfhAtOo-eoHWwsEb1S0",
  authDomain: "meet-in-the-midlle.firebaseapp.com",
  projectId: "meet-in-the-midlle",
  storageBucket: "meet-in-the-midlle.appspot.com",
  messagingSenderId: "951416791338",
  appId: "1:951416791338:web:088529865e738eb9153e53",
};

/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
*/

firebase.initializeApp(firebaseConfig);

export default firebase;
