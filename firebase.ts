import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC3kiOOStLtUp5MySEhi4jBRbGuQs0P_7A",
  authDomain: "codraft-6bb40.firebaseapp.com",
  projectId: "codraft-6bb40",
  storageBucket: "codraft-6bb40.firebasestorage.app",
  messagingSenderId: "98264936025",
  appId: "1:98264936025:web:f78047618c4971855d8b48",
  measurementId: "G-P1BJK17KP2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };