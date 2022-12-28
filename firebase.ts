// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3EvWG_5hqVCo5xvKHRJWm9H7ETWURtKw",
  authDomain: "timetracker-5733d.firebaseapp.com",
  projectId: "timetracker-5733d",
  storageBucket: "timetracker-5733d.appspot.com",
  messagingSenderId: "68863297146",
  appId: "1:68863297146:web:271af987a1744b84291dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };