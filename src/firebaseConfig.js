// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Xl2JVHcsJ2PMmgIyNj-AuTMlxBPnH50",
  authDomain: "food-app-2f194.firebaseapp.com",
  databaseURL: "https://food-app-2f194-default-rtdb.firebaseio.com",
  projectId: "food-app-2f194",
  storageBucket: "food-app-2f194.appspot.com",
  messagingSenderId: "966897005229",
  appId: "1:966897005229:web:0da90d050307e82a094c24",
  measurementId: "G-L5KFN7Z1EG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
