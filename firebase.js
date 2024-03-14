// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkyjDcx_HJduMTvZxXF_eQAdrIJIp5bl0",
  authDomain: "careercompass-818c6.firebaseapp.com",
  databaseURL: "https://careercompass-818c6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "careercompass-818c6",
  storageBucket: "careercompass-818c6.appspot.com",
  messagingSenderId: "273207004573",
  appId: "1:273207004573:web:06ec357d278d6a5aea3374",
  measurementId: "G-FE8XY26WHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);