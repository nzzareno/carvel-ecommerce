import React, { useState } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className="hamburger"
      style={{ color: "#000" }}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="closest"
      style={{ color: "#000" }}
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      <div className="logo-wrap">
        <div>
          <h4 className="logo-text">
            <a href="/">Carvel</a>
          </h4>
        </div>
      </div>

      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;