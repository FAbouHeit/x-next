// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-429615.firebaseapp.com",
  projectId: "x-next-429615",
  storageBucket: "x-next-429615.appspot.com",
  messagingSenderId: "865692437176",
  appId: "1:865692437176:web:f7340447679d2c7d57424d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };