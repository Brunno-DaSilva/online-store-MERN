import React, { Component } from "react";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { ProductConsumer } from "../../ContextApi";
import HomeServices from "../Home/HomeServices";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeServices />
        <div className="product-list-container">
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
        <Footer />
      </React.Fragment>
    );
  }
}
