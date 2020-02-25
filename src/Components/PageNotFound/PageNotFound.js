import React, { Component } from "react";
import logoTypeImg from "./logotype.png";
import { NavLink } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="top-color"></div>
        <div className="pageNotFound-container">
          <div>
            <h1>4</h1>
          </div>
          <NavLink to="/products">
            <div className="pageNotFound-img">
              <img src={logoTypeImg} alt="Login Image" />
            </div>
          </NavLink>
          <div>
            <h1>4</h1>
          </div>
        </div>
        <div className="bottom-color"></div>
      </div>
    );
  }
}
