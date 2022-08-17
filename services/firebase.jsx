// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATaPVR4PC4_kducqESYkBdgct9erJMcSc",
  authDomain: "crud-simples-6b303.firebaseapp.com",
  projectId: "crud-simples-6b303",
  storageBucket: "crud-simples-6b303.appspot.com",
  messagingSenderId: "1069604949165",
  appId: "1:1069604949165:web:5c9792c95ba034ef404a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)