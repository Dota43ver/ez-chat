import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ezchat-a9919.firebaseapp.com",
  projectId: "ezchat-a9919",
  storageBucket: "ezchat-a9919.appspot.com",
  messagingSenderId: "638015799263",
  appId: "1:638015799263:web:2347a3e3f9f0a4b2bb4e6a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()