import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ScrollerMotion } from "scroller-motion";

ReactDOM.render(
  <React.StrictMode>
    <ScrollerMotion
      spring={{
        mass: 1.25,
        stiffness: 200,
        damping: 50,
      }}
    >
      <App />
    </ScrollerMotion>
  </React.StrictMode>,
  document.getElementById("root")
);
