// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpfNqBvoDIOigx6t7er0iyT3OgYnbHJ4Y",
  authDomain: "coffee-emporium-765cc.firebaseapp.com",
  projectId: "coffee-emporium-765cc",
  storageBucket: "coffee-emporium-765cc.firebasestorage.app",
  messagingSenderId: "242632075984",
  appId: "1:242632075984:web:d850e73c85ae563e480cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);