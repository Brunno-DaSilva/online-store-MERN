import React, { Component } from "react";
import { ProductConsumer } from "../../ContextApi";
import { NavLink } from "react-router-dom";
import { ButtonContainer } from "../StyleComponents/Button";

export default class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
          const { id, img, price, title } = value.detailProduct;

          return (
            <div className="details-container">
              <h1>Home welcome</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
