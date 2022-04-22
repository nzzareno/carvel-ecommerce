import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBA5Rq1LrWTlWshf8roMksMIdroDgcqvkU",
  authDomain: "carvel-ecommerce-coder.firebaseapp.com",
  projectId: "carvel-ecommerce-coder",
  storageBucket: "carvel-ecommerce-coder.appspot.com",
  messagingSenderId: "194983770207",
  appId: "1:194983770207:web:404e2c4742cc88a46343ea",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
