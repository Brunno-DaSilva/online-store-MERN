import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./ContextApi";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);
