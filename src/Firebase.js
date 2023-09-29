// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUPbzBLUhf_dSGZRNsxGRjH1IGulWP9t0",
  authDomain: "trabajoautonomo4-7bd88.firebaseapp.com",
  projectId: "trabajoautonomo4-7bd88",
  storageBucket: "trabajoautonomo4-7bd88.appspot.com",
  messagingSenderId: "834611109064",
  appId: "1:834611109064:web:d5ffcdd57ee3af7ee719fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage  = getStorage(app);
export const db  = getFirestore(app);
