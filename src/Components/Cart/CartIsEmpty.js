import React from "react";
import { NavLink } from "react-router-dom";
import ImgCartIsEmpty from "./CartIsEmpty.png";

export default function CartIsEmpty() {
  return (
    <div className="cart-is-empty">
      <div className="cart-is-empty-title">
        <h4>The cart is currently empty</h4>

        <NavLink to="/products">
          <button type="button" className="btn-details">
            Go to products
          </button>
        </NavLink>
      </div>
      <div className="cart-is-empty-img">
        <img src={ImgCartIsEmpty} alt="Cart is Empty" />
      </div>
    </div>
  );
}
