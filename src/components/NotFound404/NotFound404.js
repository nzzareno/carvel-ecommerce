import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NotFound404.scss";
import {CarritoContext} from "../../context/CartContext";

const NotFound404 = () => {
  let { footerOff } = useContext(CarritoContext);
  let {setFooterOff} = useContext(CarritoContext);

  const byeFooter = () => {
    setFooterOff(true);
  }

  byeFooter()

  return (
   footerOff && (
      <div className="containerzx">
        <i id="err-icon" className="fa fa-exclamation-circle"></i>
        <h1 className="hache1">404 Not Found!</h1>
        <p className="pe">
          The file or directory you are looking for isn't here!
        </p>
        <Link style={{ textDecoration: "none" }} to="/carvel-ecommerce">
          <h3 className="hache3">Go to home</h3>
        </Link>
      </div>
    )
  );
};

export default NotFound404;
