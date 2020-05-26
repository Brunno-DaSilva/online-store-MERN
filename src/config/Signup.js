import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSignUp(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <div className="user-login-container">
          <div className="login-img">
            <img src={loginImg} alt="Login Image" />
          </div>
          <div className="form-container">
            {/* the form starts here */}

            <form onSubmit={this.onSubmit}>
              <div className="logo-type">
                <img src={logoTypeImg} alt="LogoType" />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
              </div>
              <div className="btn-holder">
                <button type="submit" className="btn-details">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
