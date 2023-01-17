import { firebaseKey } from "./keys";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "quizzproj-331d7.firebaseapp.com",
  projectId: "quizzproj-331d7",
  storageBucket: "quizzproj-331d7.appspot.com",
  messagingSenderId: "313890013754",
  appId: "1:313890013754:web:1beebcfc951d9ae89beb03",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
