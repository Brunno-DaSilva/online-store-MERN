import React, { Component } from "react";
import { ProductConsumer } from "../../ContextApi";
import Title from "../Title/Title";
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
              <Title name="Welcome to" title="TechFy"></Title>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
