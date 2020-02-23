import React from "react";
import ImgCartIsEmpty from "./CartIsEmpty.png";

export default function CartIsEmpty() {
  return (
    <div className="cart-is-empty">
      <div className="cart-is-empty-title">
        <h3>The cart is currently empty</h3>
      </div>
      <div className="cart-is-empty-img">
        <img src={ImgCartIsEmpty} alt="Cart is Empty" />
      </div>
    </div>
  );
}
