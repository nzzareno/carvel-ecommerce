import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { CarritoContext } from "../../context/CartContext";

const Footer = () => {
  let { footerOff } = useContext(CarritoContext);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    !footerOff && (
      <div className="footer-container">
        <motion.footer
          className="footer-footer"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <ul className="social-icon">
            <li>
              <Link className="social-links" to="#">
                <BsFacebook
                  style={{
                    color: "rgb(21,60,255)",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link className="social-links" to="#">
                <BsTwitter
                  style={{
                    color: "#1D9BF0",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link className="social-links" to="#">
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link className="social-links" to="#">
                <BsInstagram className="instagramIcon" />
              </Link>
            </li>
          </ul>
          <ul className="menux">
            <li>
              <Link className="footer-links-titles" to={"#"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-links-titles" to={"#"}>
                About
              </Link>
            </li>
            <li>
              <Link className="footer-links-titles" to={"#"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="footer-links-titles" to={"#"}>
                Team
              </Link>
            </li>
            <li>
              <Link className="footer-links-titles" to={"#"}>
                Contact
              </Link>
            </li>
          </ul>
          <p>© 2022 CARVEL CLOTHES - ALL RIGHTS RESERVED</p>
        </motion.footer>
      </div>
    )
  );
};

export default Footer;
