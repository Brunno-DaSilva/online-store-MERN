import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details/Details";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment className="container">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/home" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
