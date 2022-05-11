import React from "react";
import { Link } from "react-router-dom";
import "./NotFound404.scss";
const NotFound404 = () => {
  return (
    <div className="container">
      <div className="boo-wrapper">
        <div className="boo">
          <div className="face"></div>
        </div>
        <div className="shadow"></div>

        <h1>Whoops!</h1>
        <p>
          We couldn't find the page you
          <br />
          were looking for.
        </p>
        <Link style={{ textDecoration: "none" }} to="/carvel-ecommerce">
          <h5>Go to home</h5>
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
