import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGbqjqRym5EzUUHjWPKPyshNhrbQSHaBk",
  authDomain: "movie-45bdc.firebaseapp.com",
  projectId: "movie-45bdc",
  storageBucket: "movie-45bdc.firebasestorage.app",
  messagingSenderId: "764573638756",
  appId: "1:764573638756:web:c0c9798a5457dbb2bd3f71",
  measurementId: "G-LPQ7YQCGW8"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth & Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



