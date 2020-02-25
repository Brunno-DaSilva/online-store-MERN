import React from "react";
import logoImage from "./logotypewhite.png";

export default function CartTotal({ value }) {
  const { cartSubtotal, productTax, cartTotal, clearItems } = value;
  return (
    <div className="cart-total-container">
      <div className="cart-total">
        <div className="cart-total-img">
          <img src={logoImage} alt="TechFy Logo" />
        </div>

        <div className="cart-total-items">
          <p>
            Subtotal: <span>{cartSubtotal}</span>
          </p>
        </div>
        <div className="cart-total-items">
          <p>
            Product Tax: <span>{productTax}</span>
          </p>
        </div>
        <div className="cart-total-items">
          <p>
            Total: <span>{cartTotal}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
