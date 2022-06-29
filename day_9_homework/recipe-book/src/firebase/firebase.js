// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVUGsi12lfqX1hZfho1C8Lo7XeY4KfCA",
  authDomain: "recipe-book-f46cb.firebaseapp.com",
  projectId: "recipe-book-f46cb",
  storageBucket: "recipe-book-f46cb.appspot.com",
  messagingSenderId: "466064524355",
  appId: "1:466064524355:web:f93a2013b0a47ed23a40f6",
  measurementId: "G-01JWEZFYXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};