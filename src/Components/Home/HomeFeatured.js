import React from "react";
import headphoneImg from "./images/headphone.png";
import iPhoneImg from "./images/iphone11right.png";
import { ButtonContainer } from "../StyleComponents/Button";
import { NavLink } from "react-router-dom";

export default function HomeFeatured() {
  return (
    <div>
      <div className="home-featured-container">
        <div className="featured-img-container">
          <div className="left-img-holder">
            <img src={headphoneImg} />
          </div>
          <div className="right-img-holder">
            <h2>Bose Noise Canceling</h2>
            <h3>Now we’ve raised the bar</h3>
            <h4>Exclusive Offer only at TechFy</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
        </div>

        <div className="featured-img-container ">
          <div className="left-img-holder2">
            <h2>iPhone 11 Pro</h2>
            <h3>A chip that’s all Pro</h3>
            <h4>Exclusive Offer only at TechFy</h4>
            <NavLink to="/products">
              <ButtonContainer>Shop Now</ButtonContainer>
            </NavLink>
          </div>
          <div className="right-img-holder2">
            <img src={iPhoneImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
