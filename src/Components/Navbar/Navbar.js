import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { ButtonContainer } from "../StyleComponents/Button";
import { NavWrapper } from "../StyleComponents/NavWrapper";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <NavLink to="/home">
          <img src={logo} alt="logo" className="logo navbar-brand" alt="logo" />
        </NavLink>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <NavLink to="/home" className="nav-link">
              Products
            </NavLink>
          </li>
        </ul>

        <NavLink to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fab fa-opencart " />
            </span>
          </ButtonContainer>
        </NavLink>
      </NavWrapper>
    );
  }
}
