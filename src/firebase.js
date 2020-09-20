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

export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  // Initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Ask user to select gmail account in a new pop up window
  auth.signInWithPopup(googleProvider);
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("user").doc(uid);
    return userDocument;
  } catch (error) {
    console.error("Error in getUserDocument", error.message);
  }
}

export const signOut = () => {
  auth.signOut();
};
