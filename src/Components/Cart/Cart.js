import React, { Component } from "react";
import Title from "../Title/Title";
import CartIsEmpty from "./CartIsEmpty";
import { ProductConsumer } from "../../ContextApi";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Shopping" title="Cart"></Title>

                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            }
            return (
              <React.Fragment>
                <CartIsEmpty />
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
