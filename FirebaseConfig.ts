// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeneRDWbZumIpK16HuLvZLzzBTYx-b-IQ",
  authDomain: "plantinhasapp.firebaseapp.com",
  projectId: "plantinhasapp",
  storageBucket: "plantinhasapp.appspot.com",
  messagingSenderId: "804496713770",
  appId: "1:804496713770:web:af3d52e3ff12c2d3ef7b53",
  measurementId: "G-9JKNQ4HF97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
