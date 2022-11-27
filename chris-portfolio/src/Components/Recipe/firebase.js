// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzyN23sagnDy4y04ii8GrqNyPMQytKWo",
  authDomain: "uploadingfile-9cffe.firebaseapp.com",
  projectId: "uploadingfile-9cffe",
  storageBucket: "uploadingfile-9cffe.appspot.com",
  messagingSenderId: "298112087783",
  appId: "1:298112087783:web:512cd282f518d891139442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app);