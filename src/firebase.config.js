import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs6FI9JIflbwoNBpw3yMWQaGHCEw1qADo",
  authDomain: "house-market-recap.firebaseapp.com",
  projectId: "house-market-recap",
  storageBucket: "house-market-recap.appspot.com",
  messagingSenderId: "656781905793",
  appId: "1:656781905793:web:cbce180ee271b3c06ba280",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
