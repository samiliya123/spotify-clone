// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrClJ-gvKgwc2KO9n766tWo6KAJTWowpQ",
  authDomain: "facebook-clone-8b7d4.firebaseapp.com",
  projectId: "facebook-clone-8b7d4",
  storageBucket: "facebook-clone-8b7d4.appspot.com",
  messagingSenderId: "225029042956",
  appId: "1:225029042956:web:dc6feb9c52a809fa350f29",
  measurementId: "G-90HG5JQDNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);