import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, query } from "firebase/firestore";

// firebase configrations
const firebaseConfig = {
  apiKey: "AIzaSyCGMemOVbzx2yP7Ci_lRJM-be7bt81XahM",
  authDomain: "cart-13839.firebaseapp.com",
  projectId: "cart-13839",
  storageBucket: "cart-13839.appspot.com",
  messagingSenderId: "786176295374",
  appId: "1:786176295374:web:37269da47b68311195ab9f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
