import React, { Component } from "react";
import Product from "../Product/Product";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ProductConsumer } from "../../ContextApi";
// import HomeServices from "../Home/HomeServices";

export default class ProductList extends Component {
  state = {
    allProducts: true,
    smartPhones: false,
    laptops: false,
    monitors: false,
    headphones: false,
    tvs: false,
  };

  sortSmartPhones = () => {
    const {
      allProducts,
      smartPhones,
      laptops,
      monitors,
      headphones,
      tvs,
    } = this.state;

    this.setState({
      allProducts: !allProducts,
      smartPhones: !smartPhones,
      laptops: laptops,
      monitors: monitors,
      headphones: headphones,
      tvs: tvs,
    });
  };

  sortLaptops = () => {
    const {
      allProducts,
      smartPhones,
      laptops,
      monitors,
      headphones,
      tvs,
    } = this.state;

    this.setState({
      allProducts: !allProducts,
      smartPhones: smartPhones,
      laptops: !laptops,
      monitors: monitors,
      headphones: headphones,
      tvs: tvs,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main-services">
          <div class="sub-title-services">
            <h1>Shop the Latest Tech</h1>
          </div>
          <div className="body-icon-container">
            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="icon-item-info">
                  <h3>Laptops</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="icon-item-info">
                  <h3>Smart Phones</h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-tv"></i>
                </div>
                <div className="icon-item-info">
                  <h3>TVs</h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-headphones"></i>
                </div>
                <div className="icon-item-info">
                  <h3>headphone</h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i class="fas fa-desktop"></i>
                </div>
                <div className="icon-item-info">
                  <h3>monitors</h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="products">
              <div className="icon-item">
                <div className="icon-item-top">
                  <i class="fas fa-undo-alt"></i>
                </div>
                <div className="icon-item-info">
                  <h3>All</h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="product-list-container">
          <button onClick={this.sortSmartPhones}>
            Change State smartPhone
          </button>

          <button onClick={this.sortLaptops}> Change State Laptops</button>

          <div className="product-list-holder">
            {this.state.allProducts ? (
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.name} product={product} />;
                  });
                }}
              </ProductConsumer>
            ) : this.state.smartPhones ? (
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter(
                      (categoryProduct) =>
                        categoryProduct.category === "smartPhones"
                    )
                    .map((product) => {
                      return <Product key={product.name} product={product} />;
                    });
                }}
              </ProductConsumer>
            ) : this.state.laptops ? (
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter(
                      (categoryProduct) =>
                        categoryProduct.category === "laptops"
                    )
                    .map((product) => {
                      return <Product key={product.name} product={product} />;
                    });
                }}
              </ProductConsumer>
            ) : this.state.monitors ? (
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter(
                      (categoryProduct) =>
                        categoryProduct.category === "monitors"
                    )
                    .map((product) => {
                      return <Product key={product.name} product={product} />;
                    });
                }}
              </ProductConsumer>
            ) : this.state.headphones ? (
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter(
                      (categoryProduct) =>
                        categoryProduct.category === "headphones"
                    )
                    .map((product) => {
                      return <Product key={product.name} product={product} />;
                    });
                }}
              </ProductConsumer>
            ) : this.state.tvs ? (
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter(
                      (categoryProduct) => categoryProduct.category === "tvs"
                    )
                    .map((product) => {
                      return <Product key={product.name} product={product} />;
                    });
                }}
              </ProductConsumer>
            ) : (
              <h1>We could not match your search</h1>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
