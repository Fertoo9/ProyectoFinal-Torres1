import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7QgN0U5H5F2gCh1DA3R33u_QJcsJd_jk",
  authDomain: "zonagaming-35270.firebaseapp.com",
  projectId: "zonagaming-35270",
  storageBucket: "zonagaming-35270.firebasestorage.app",
  messagingSenderId: "974552431534",
  appId: "1:974552431534:web:fd3e7f719d22eafdd7663f"
};

const app = initializeApp(firebaseConfig);

// Exportamos la DB
export const db = getFirestore(app);