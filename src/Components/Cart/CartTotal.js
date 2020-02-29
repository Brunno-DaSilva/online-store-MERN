import React from "react";
import { NavLink } from "react-router-dom";
import PayPalButton from "./PayPal";
import logoImage from "./logotypewhite.png";

export default function CartTotal({ value, history }) {
  const { cartSubTotal, productTax, cartTotal, clearItems } = value;
  return (
    <div className="cart-total-container">
      <div className="cart-total">
        <div className="cart-total-img">
          <img src={logoImage} alt="TechFy Logo" />
        </div>

        <div className="cart-total-items">
          <table className="cart-total-table">
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Subtotal: </td>
              <td>
                <span>$ {cartSubTotal}</span>
              </td>
            </tr>
            <tr>
              <td>Product Tax: </td>
              <td>
                <span>$ {productTax}</span>
              </td>
            </tr>
            <tr>
              <td> Total: </td>
              <td>
                <span className="total-price">$ {cartTotal}</span>
              </td>
            </tr>
          </table>
        </div>

        <div className="btn-holder">
          <div>
            <NavLink to="/products">
              <button
                onClick={() => {
                  clearItems();
                }}
                type="button"
                className="btn-details"
              >
                Clear Cart
              </button>
            </NavLink>
          </div>

          <div>
            <PayPalButton
              totalAmount={cartTotal}
              clearCart={clearItems}
              history={history}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
