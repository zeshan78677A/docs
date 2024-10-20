// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMheYZVTvbaPoM0pzh-X7FyN4Vg-4ZyJk",
  authDomain: "docs-app-13653.firebaseapp.com",
  projectId: "docs-app-13653",
  storageBucket: "docs-app-13653.appspot.com",
  messagingSenderId: "599115253976",
  appId: "1:599115253976:web:f8c113337c0c30d92eefad",
  measurementId: "G-BWXSEZ1MXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datas = getFirestore(app)