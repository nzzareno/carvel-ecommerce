 
import React from "react";
import MobileNavigation from "./MobileNavigation";
import "./Navbar.scss";
import Navigation from "./Navigation";

 

const Navbar = () => {
  return (
    <div className='wrap'>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
