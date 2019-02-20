import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBKkiMBb-surroPJLRnYZdjW6cnFbwkyk",
  authDomain: "celebraton-1501228504967.firebaseapp.com",
  databaseURL: "https://celebraton-1501228504967.firebaseio.com",
  projectId: "celebraton-1501228504967",
  storageBucket: "celebraton-1501228504967.appspot.com",
  messagingSenderId: "758455806254"
};

try {
  firebase.initializeApp(config);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const storage = firebase.storage();

export { storage, firebase as default };
