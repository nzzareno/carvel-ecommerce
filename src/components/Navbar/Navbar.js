import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="wrap">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
