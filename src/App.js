import React from "react";
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
import "./App.css";

function App() {
  return (
    <React.Fragment className="container">
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/products" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/about" component={AboutThisApp}></Route>
        <Route
          path="/login"
          render={() => (
            <UserLogin baseUrl="https://dev-984896.okta.com/oauth2/default" />
          )}
        />
        <Route path="/signup" component={Signup} />
        <Route component={PageNotFound} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
