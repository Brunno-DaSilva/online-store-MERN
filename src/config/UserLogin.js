import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import OktaSignIn from "@okta/okta-signin-widget";

import loginImg from "./login-img.png";
import logoTypeImg from "./logotypewhite.png";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: "https://{dev-984896.okta.com}",
      clientId: "{0oa2ohir7TOmuTCbd4x6}",
      redirectUri: "http://localhost:3000",
      authParams: {
        responseType: "id_token"
      }
    });
  }
  componentDidMount() {
    this.widget.session.get(response => {
      if (response.status !== "INACTIVE") {
        this.setState({ user: response.login });
      } else {
        this.showLogin();
      }
    });
  }

  showLogin() {
    // Backbone.history.stop();
    this.widget.renderEl(
      { el: this.loginContainer },
      response => {
        this.setState({ user: response.claims.email });
      },
      err => {
        console.log(err);
      }
    );
  }

  logout() {
    this.widget.signOut(() => {
      this.setState({ user: null });
      this.showLogin();
    });
  }

  render() {
    return (
      // <div>
      //   {this.state.user ? (
      //     <div className="user-login-container">
      //       <div>Welcome, {this.state.user}!</div>
      //       <button onClick={this.logout}>Logout</button>
      //     </div>
      //   ) : null}
      //   {this.state.user ? null : (
      //     <div
      //       ref={div => {
      //         this.loginContainer = div;
      //       }}
      //     />
      //   )}
      // </div>

      <div>
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
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
                    type="password"
                    name="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="btn-holder">
                  <NavLink to="/home">
                    <button type="submit" className="btn-details">
                      Login
                    </button>
                  </NavLink>

                  <NavLink to="/signup">
                    <button
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
        )}
      </div>
    );
  }
}
export default UserLogin;
