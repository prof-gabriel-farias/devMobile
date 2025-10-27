// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv4i0b3t5PkpeVfMDb02Jgngc05GRiIpw",
  authDomain: "uscmobile252.firebaseapp.com",
  databaseURL: "https://uscmobile252-default-rtdb.firebaseio.com",
  projectId: "uscmobile252",
  storageBucket: "uscmobile252.firebasestorage.app",
  messagingSenderId: "676219004567",
  appId: "1:676219004567:web:2889655c468f92de00ebd2",
  measurementId: "G-2S54T0V0XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);