// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0-Q7c_tLE_IyVREvwgeQP8le311YAKI",
  authDomain: "password-react.firebaseapp.com",
  projectId: "password-react",
  storageBucket: "password-react.appspot.com",
  messagingSenderId: "838604156498",
  appId: "1:838604156498:web:1fb7686c2c2ad3860cf98b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;