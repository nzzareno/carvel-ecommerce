import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className="nav__container">
      <div id="logoMobile" className="logo-wrap">
        <div className="logo-text">Carvel</div>
      </div>
      <div className="nav_menu">
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.14 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a href="/#shop">SHOP</a>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.21 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a href="/#contact">Contact</a>
          </motion.li>
          <motion.button
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.21 }}
            className="nav--button"
            href="/#signup"
          >
            Connect
          </motion.button>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
