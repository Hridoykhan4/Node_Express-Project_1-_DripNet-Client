// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYCFgt7WIsGVEp_WwEFJkf9ROoqgqOBa8",
  authDomain: "dripnet-cafe.firebaseapp.com",
  projectId: "dripnet-cafe",
  storageBucket: "dripnet-cafe.firebasestorage.app",
  messagingSenderId: "1094727781471",
  appId: "1:1094727781471:web:959c597a598363fd555fea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
