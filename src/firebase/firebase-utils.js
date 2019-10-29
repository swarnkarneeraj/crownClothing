import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAB0BdNiBA2v61v8f8RdmNmlGPVcRyHaZA",
  authDomain: "crwn-db-e1e4d.firebaseapp.com",
  databaseURL: "https://crwn-db-e1e4d.firebaseio.com",
  projectId: "crwn-db-e1e4d",
  storageBucket: "crwn-db-e1e4d.appspot.com",
  messagingSenderId: "110374933123",
  appId: "1:110374933123:web:b9cedbb42add0878ba01b6",
  measurementId: "G-NSNZEEE602"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
