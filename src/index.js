import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./ContextApi";
import { Security, ImplicitCallback } from "@okta/okta-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLogin from "./config/UserLogin";

import "./index.css";
import App from "./App";

function onAuthRequired({ history }) {
  history.push("/login");
}

ReactDOM.render(
  <ProductProvider>
    <Router>
      <Security
        issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
        client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
        redirect_uri={`${window.location.origin}/implicit/callback`}
        onAuthRequired={onAuthRequired}
      >
        <App />
        <Route path="/implicit/callback" component={ImplicitCallback} />
      </Security>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
