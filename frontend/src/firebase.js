// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACAv5VFSpdURHupu5VuU8shqDPrZFMDSE",
  authDomain: "tony-blogsite.firebaseapp.com",
  projectId: "tony-blogsite",
  storageBucket: "tony-blogsite.appspot.com",
  messagingSenderId: "1086127532610",
  appId: "1:1086127532610:web:29fd7369f5d4a730cf1bdb",
  measurementId: "G-4LZNTHFM82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};