import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgA3mbP2gMyO4Q_jtSi6XmJ3fjfoOm-kg",
  authDomain: "react-slack-clone-8dc40.firebaseapp.com",
  databaseURL: "https://react-slack-clone-8dc40.firebaseio.com",
  projectId: "react-slack-clone-8dc40",
  storageBucket: "react-slack-clone-8dc40.appspot.com",
  messagingSenderId: "55635716367",
  appId: "1:55635716367:web:21fd178eb86a7cb948f67a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
