// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// require('dotenv').config();
// console.log("sasa",process.env.REACT_APP_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyClnGV1cSSSUJ57bFKdNoXQLfk47Cq6MQQ",
  authDomain: "mern-auth-cfd50.firebaseapp.com",
  projectId: "mern-auth-cfd50",
  storageBucket: "mern-auth-cfd50.appspot.com",
  messagingSenderId: "281327990149",
  appId: "1:281327990149:web:92f4eeba75cb22a86180ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);