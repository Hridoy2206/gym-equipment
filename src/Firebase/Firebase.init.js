// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPmYU18BPZbgIZkqYHmKKbqGU9o_ZXiNQ",
  authDomain: "gym-equipment-d29ae.firebaseapp.com",
  projectId: "gym-equipment-d29ae",
  storageBucket: "gym-equipment-d29ae.appspot.com",
  messagingSenderId: "774396728804",
  appId: "1:774396728804:web:21a569988352a3fc7023f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth