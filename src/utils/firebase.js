import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHS_5AbEWo3TB25V7lac6jN7XpIPTdl0E",
  authDomain: "netflixgpt-bbaa9.firebaseapp.com",
  projectId: "netflixgpt-bbaa9",
  storageBucket: "netflixgpt-bbaa9.appspot.com",
  messagingSenderId: "576888700631",
  appId: "1:576888700631:web:23e5adaa772a1769ca7a92",
  measurementId: "G-NV19EVC8C5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
