import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";

const Navbar = ({ isLoggedIn, logout, email }) => {
  return (
    <header>
      <div className="main-navbar">
        <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>

        <div className="nav-logo">
          <NavLink to="/home">
            <img src={logo} alt="logo" className="logo" alt="logo" />
          </NavLink>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/home" className="style-links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="style-links">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="style-links">
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="style-cart">
                <span>
                  <i className="fab fa-opencart" />
                </span>
              </NavLink>
            </li>
            <li className="user-login">
              <NavLink to="/login" className="style-links">
                {isLoggedIn ? (
                  <span className="user-email-format">
                    Welcome <span>{email}</span>
                  </span>
                ) : (
                  <span id="user-logIn"> Login</span>
                )}
              </NavLink>
            </li>
            <li className="user-signup">
              <NavLink to="/signup" className="style-links">
                {isLoggedIn ? "" : <span id="user-signup">signup</span>}
              </NavLink>
            </li>
            <li onClick={logout} className="user-logout">
              <NavLink to="/home" className="style-links">
                <span id="user-logout">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </div>
      <div className="ghost"></div>
    </header>
  );
};
export default Navbar;
