import firebase from "firebase";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDrLUA-ybhSmsvjo19wNyOMlFVmXvsEPA0",
//   authDomain: "sportsworld-b6d53.firebaseapp.com",
//   projectId: "sportsworld-b6d53",
//   storageBucket: "sportsworld-b6d53.appspot.com",
//   messagingSenderId: "378599160420",
//   appId: "1:378599160420:web:208f1ff69306be416a3d71",
//   measurementId: "G-HYLS4ZNGYL",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA9GhajuVbmlDAz8J3BbV78BvT5g5guD7Y",
  authDomain: "clone-1a104.firebaseapp.com",
  projectId: "clone-1a104",
  storageBucket: "clone-1a104.appspot.com",
  messagingSenderId: "230941578010",
  appId: "1:230941578010:web:bb778255f3c00347d792a3",
  measurementId: "G-HE59DK0RFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
