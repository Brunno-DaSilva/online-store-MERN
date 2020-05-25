import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import fire from "./Firebase";
import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="user-login-container">
          <div className="login-img">
            <img src={loginImg} alt="Login Image" />
          </div>
          <div className="form-container">
            <form>
              <div className="logo-type">
                <img src={logoTypeImg} alt="LogoType" />
              </div>
              {/* <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Your name"
                />
              </div> */}
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="btn-holder">
                <NavLink to="/home">
                  <button
                    type="submit"
                    onClick={this.login}
                    className="btn-details"
                  >
                    Login
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
