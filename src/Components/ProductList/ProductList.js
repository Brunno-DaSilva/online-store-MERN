import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../../ContextApi";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="product-list-container">
          <Title name="Our" title="Products" />
          <div className="product-list-holder">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.name} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
