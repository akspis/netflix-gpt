import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb55vRmLvMM8KXorDVtCvBYSB2BZ4tZUY",
  authDomain: "netflix-gpt-ea312.firebaseapp.com",
  projectId: "netflix-gpt-ea312",
  storageBucket: "netflix-gpt-ea312.appspot.com",
  messagingSenderId: "699952670300",
  appId: "1:699952670300:web:6a03716f105cc7bd576899",
  measurementId: "G-44QSW7QBVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
