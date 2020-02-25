import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cart-items-container">
      <div className="cart-item-img">
        <img src={img} alt={title} />
      </div>

      <div className="cart-item-space">
        <h4>{title}</h4>
      </div>

      <div className="cart-item-space">
        <h4>${price}</h4>
      </div>
      <div className="cart-item-space cart-item-btn">
        <div className="mais">
          <i className="fas fa-plus"></i>
        </div>
        <div className="quantity">
          <p>1</p>
        </div>

        <div className="menos">
          <i className="fas fa-minus"></i>
        </div>
      </div>
      <div className="cart-item-space">
        <h4>${price}</h4>
      </div>
    </div>
  );
}
