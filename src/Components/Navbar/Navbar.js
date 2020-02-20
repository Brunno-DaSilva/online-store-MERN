import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { ButtonContainer } from "../StyleComponents/Button";
import fire from "../../config/Firebase";

export default class Navbar extends Component {
  logout() {
    fire.auth().signOut();
  }

  render() {
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
              <li className="">
                <NavLink to="/home" className="style-links">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/products" className="style-links">
                  Products
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/about" className="style-links">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/cart" className="style-cart ">
                  <span className="">
                    <i className="fab fa-opencart" />
                  </span>
                </NavLink>
              </li>
              <li className="user-login">
                <NavLink to="/login" className="style-links">
                  Login
                </NavLink>
              </li>
              <li className="user-signup">
                <NavLink to="/signup" className="style-links">
                  Signup
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
  }
}
