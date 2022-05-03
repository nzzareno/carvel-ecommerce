import "./Navigation.scss";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useState } from "react";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(true);
  };

  const handleToggler = () => {
    setActive(false);
  };

  return (
    <>
      <div className="nav__container">
        <div id="logoMobile" className="logo-wrap">
          <Link
            to="/carvel-ecommerce"
            className="logo-text"
            style={{ textDecoration: "none" }}
          >
            Carvel
          </Link>
          <CartWidget style={{ position: "absolute", right: "200px" }} />
        </div>
      </div>

      <input
        className="menu-icon"
        type={isActive ? "checkbox" : undefined}
        id="menu-icon"
        name="menu-icon"
        onClick={() => handleToggle()}
        style={{
          display: !isActive && "none",
        }}
      />
      <label htmlFor="menu-icon"></label>

      <nav className="nav">
        <ul>
          <li onClick={() => handleToggler()}>
            <NavLink to={"/carvel-ecommerce/category/Accessories"}>
              ACCESSORIES
            </NavLink>
          </li>
          <li onClick={() => handleToggler()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Glasses"}
            >
              GLASSES
            </NavLink>
          </li>
          <li onClick={() => handleToggler()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Hats"}
            >
              HATS
            </NavLink>
          </li>

          <li onClick={() => handleToggler()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Jackets"}
            >
              JACKETS
            </NavLink>
          </li>

          <li onClick={() => handleToggler()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Womens"}
            >
              WOMENS
            </NavLink>
          </li>
          <li onClick={() => handleToggler()}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/carvel-ecommerce/category/Womens"}
            ></NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
