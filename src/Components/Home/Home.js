import React, { Component } from "react";
import { ProductConsumer } from "../../ContextApi";
import { NavLink } from "react-router-dom";
import Slideshow from "./Slideshow";
import HomeServices from "./HomeServices";
import HomeFeatured from "./HomeFeatured";

export default class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
          const { id, img, price, title } = value.detailProduct;

          return (
            <div className="home-container">
              <Slideshow />
              <HomeServices />
              <HomeFeatured />
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
