import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Firebase from "./Firebase";
import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="user-login-container">
        <div className="login-img">
          <img src={loginImg} alt="Login Image" />
        </div>
        <div className="form-container">
          <form>
            <div className="logo-type">
              <img src={logoTypeImg} alt="LogoType" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
              <button
                type="submit"
                onClick={this.login}
                className="btn-details"
              >
                Login
              </button>
              <button
                onClick={this.signup}
                style={{ marginLeft: "25px" }}
                className="btn-details"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UserLogin;
