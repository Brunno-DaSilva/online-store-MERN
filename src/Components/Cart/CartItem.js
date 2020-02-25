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
        <h4>
          Product: <span>{title}</span>
        </h4>
      </div>

      <div className="cart-item-space">
        <h4>
          Price: <span>$ {price}</span>
        </h4>
      </div>
      <div className="cart-item-space cart-item-btn">
        <div onClick={() => increment(id)} className="mais">
          <i className="fas fa-plus"></i>
        </div>
        <div className="quantity">
          <p>{count}</p>
        </div>

        <div onClick={() => decrement(id)} className="menos">
          <i className="fas fa-minus"></i>
        </div>
      </div>

      <div onClick={() => removeItem(id)} className="cart-item-space">
        <h4>
          <i class="far fa-trash-alt"></i>
        </h4>
      </div>

      <div className="cart-item-space cart-item-total">
        <h4>
          Cart total: <span>$ {total}</span>
        </h4>
      </div>
    </div>
  );
}
