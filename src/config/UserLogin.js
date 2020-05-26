import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import firebaseApp from "./Firebase";
import { ProductConsumer } from "../ContextApi";

import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

class UserLogin extends Component {
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

  login = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
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
            <form onSubmit={this.login}>
              <div className="logo-type">
                <img src={logoTypeImg} alt="LogoType" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  value={this.state.email}
                  onChange={this.updateEmail}
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.updatePassword}
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <div className="btn-holder">
                <button type="submit" className="btn-details">
                  Login
                </button>

                <NavLink to="/signup">
                  <button
                    type="submit"
                    style={{ marginLeft: "25px" }}
                    className="btn-details"
                  >
                    Signup
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default UserLogin;
