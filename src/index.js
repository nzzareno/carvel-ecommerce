import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CartContext from "./context/CartContext";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA5Rq1LrWTlWshf8roMksMIdroDgcqvkU",
  authDomain: "carvel-ecommerce-coder.firebaseapp.com",
  projectId: "carvel-ecommerce-coder",
  storageBucket: "carvel-ecommerce-coder.appspot.com",
  messagingSenderId: "194983770207",
  appId: "1:194983770207:web:404e2c4742cc88a46343ea",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
   
      <Router>
        <App />
      </Router>
 
    </CartContext>
  </React.StrictMode>,
  document.getElementById("root")
);
