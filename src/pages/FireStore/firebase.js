// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGD3NLCzcgl5e2SzDxK0TOllwD3c8RtQ",
  authDomain: "firestore-pro13.firebaseapp.com",
  databaseURL: "https://firestore-pro13-default-rtdb.firebaseio.com",
  projectId: "firestore-pro13",
  storageBucket: "firestore-pro13.appspot.com",
  messagingSenderId: "1072790349540",
  appId: "1:1072790349540:web:03a2b9923887712636aef1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
