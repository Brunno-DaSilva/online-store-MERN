import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details/Details";
import AboutThisApp from "./Components/About/AboutThisApp";
import Modal from "./Components/Modal/Modal";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import UserLogin from "./config/UserLogin";
import Signup from "./config/Signup";
import Home from "./Components/Home/Home";
import { auth } from "./config/Firebase";
import "./App.css";
require("dotenv").config();

export default class App extends Component {
  state = {
    isLoggedIn: false,
    wantsToLogin: false,
    email: "",
    uid: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        this.setState({
          email,
          uid,
          isLoggedIn: true,
        });
      }
    });
  }

  handleSignUp = ({ email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => console.error(err));
  };

  handleLogin = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        const { email, uid } = user;
        this.setState({
          isLoggedIn: true,
          email: user.user.email,
          uid: user.user.uid,
        });
      })
      .catch((err) => console.error(err));
  };

  logout = (e) => {
    auth.signOut().then(() => {
      this.setState({
        email: "",
        uid: null,
        isLoggedIn: false,
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/about" component={AboutThisApp}></Route>
          <Route
            path="/login"
            component={UserLogin}
            render={(props) => (
              <UserLogin
                {...props}
                onLogin={this.handleLogin}
                goToSignUp={() => this.setState({ wantsToLogin: false })}
              />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                onSignUp={this.handleSignUp}
                goToLogin={() => this.setState({ wantsToLogin: true })}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
