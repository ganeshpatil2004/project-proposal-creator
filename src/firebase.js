import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRh-Ri3Ai62X8_zphO0ekFfjUZ2s7hXvI",
  authDomain: "project-proposal-creator-290b5.firebaseapp.com",
  projectId: "project-proposal-creator-290b5",
  storageBucket: "project-proposal-creator-290b5.firebasestorage.app",
  messagingSenderId: "529721615572",
  appId: "1:529721615572:web:60b505ceae87c6e28e4741",
  measurementId: "G-HVF72RMN6S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
