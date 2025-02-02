// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebaseConfig.js'; // Importing the external configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dp = getStorage(app);
const storage = getFirestore(app);

export { imgDB, txtDB };
