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
    const { smartPhones } = this.state;

    this.setState({
      allProducts: false,
      smartPhones: !smartPhones,
      laptops: false,
      monitors: false,
      headphones: false,
      tvs: false,
    });
  };

  sortLaptops = () => {
    const { laptops } = this.state;

    this.setState({
      allProducts: false,
      smartPhones: false,
      laptops: !laptops,
      monitors: false,
      headphones: false,
      tvs: false,
    });
  };

  sortMonitors = () => {
    const { monitors } = this.state;

    this.setState({
      allProducts: false,
      smartPhones: false,
      laptops: false,
      monitors: !monitors,
      headphones: false,
      tvs: false,
    });
  };

  sortHeadphone = () => {
    const { headphones } = this.state;

    this.setState({
      allProducts: false,
      smartPhones: false,
      laptops: false,
      monitors: false,
      headphones: !headphones,
      tvs: false,
    });
  };

  sortTvs = () => {
    const { tvs } = this.state;

    this.setState({
      allProducts: false,
      smartPhones: false,
      laptops: false,
      monitors: false,
      headphones: false,
      tvs: !tvs,
    });
  };

  sortAll = () => {
    const { allProducts } = this.state;

    this.setState({
      allProducts: !allProducts,
      smartPhones: false,
      laptops: false,
      monitors: false,
      headphones: false,
      tvs: false,
    });
  };

  render() {
    return (
      <div className="products-page-margin">
        <div className="main-services">
          <div class="sub-title-services">
            <h1>Shop the Latest Tech</h1>
          </div>
          <div className="body-icon-container">
            {/* Smart Phones  */}
            <div className="shop-item-wrapper" onClick={this.sortSmartPhones}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="icon-item-info">
                  <h3>Smart Phones</h3>
                </div>
              </div>
            </div>

            {/* Laptops */}

            <div onClick={this.sortLaptops}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="icon-item-info">
                  <h3>Laptops</h3>
                </div>
              </div>
            </div>

            {/* Monitors  */}
            <div className="shop-item-wrapper" onClick={this.sortMonitors}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i class="fas fa-desktop"></i>
                </div>
                <div className="icon-item-info">
                  <h3>monitors</h3>
                </div>
              </div>
            </div>

            {/* Headphones  */}
            <div className="shop-item-wrapper" onClick={this.sortHeadphone}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-headphones"></i>
                </div>
                <div className="icon-item-info">
                  <h3>headphone</h3>
                </div>
              </div>
            </div>

            {/* Tvs */}
            <div className="shop-item-wrapper" onClick={this.sortTvs}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i className="fas fa-tv"></i>
                </div>
                <div className="icon-item-info">
                  <h3>TVs</h3>
                </div>
              </div>
            </div>

            {/* All Items  */}
            <div className="shop-item-wrapper" onClick={this.sortAll}>
              <div className="icon-item">
                <div className="icon-item-top">
                  <i class="fas fa-undo-alt"></i>
                </div>
                <div className="icon-item-info">
                  <h3>All</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-list-container">
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
      </div>
    );
  }
}
