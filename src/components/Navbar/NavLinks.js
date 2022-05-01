import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const NavLinks = (props) => {
  return (
    <div className="nav__container">
      <div id="logoMobile" className="logo-wrap">
        <Link
          to="/carvel-ecommerce"
          className="logo-text"
          style={{ textDecoration: "none" }}
        >
          Carvel
        </Link>
      </div>
      <div className="nav_menu">
        <ul>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Accessories"}
            >
              ACCESSORIES
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Glasses"}
            >
              GLASSES
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Hats"}
            >
              HATS
            </NavLink>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Jackets"}
            >
              JACKETS
            </NavLink>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Womens"}
            >
              WOMENS
            </NavLink>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
