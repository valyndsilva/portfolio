// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYjV31hBdyIVP3vYMNT7Z3XHuGags9SBY",
  authDomain: "portfolio-b806d.firebaseapp.com",
  projectId: "portfolio-b806d",
  storageBucket: "portfolio-b806d.appspot.com",
  messagingSenderId: "365843801427",
  appId: "1:365843801427:web:ab5c4c18310e430fca2da6",
  measurementId: "G-G92ZFB5LJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
