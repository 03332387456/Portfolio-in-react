// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD-EdIgal0cNquJbuOz9URjG7zJioSy_w",
  authDomain: "portfolio-5727b.firebaseapp.com",
  databaseURL: "https://portfolio-5727b-default-rtdb.firebaseio.com",
  projectId: "portfolio-5727b",
  storageBucket: "portfolio-5727b.appspot.com",
  messagingSenderId: "363224389825",
  appId: "1:363224389825:web:5469d73798ae1ac9a29c40",
  measurementId: "G-HYY6TQGNNQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);