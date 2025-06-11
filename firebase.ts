// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kiOOStLtUp5MySEhi4jBRbGuQs0P_7A",
  authDomain: "codraft-6bb40.firebaseapp.com",
  projectId: "codraft-6bb40",
  storageBucket: "codraft-6bb40.firebasestorage.app",
  messagingSenderId: "98264936025",
  appId: "1:98264936025:web:f78047618c4971855d8b48",
  measurementId: "G-P1BJK17KP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);