import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../ContextApi";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("Go to DETAILS")}
          >
            <NavLink to="/details">
              <img src={img} className="card-img-top" alt={title} />
            </NavLink>

            <button
              className="cart-btn btn-bg-cart"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fab fa-opencart" />
              )}
            </button>
          </div>
          {/*Card Footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center md-0"> {title}</p>
            <h5 className="text-blue mb-0">
              <span className="mr-1 fas fa-dollar-sign"></span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

//Make sure that the props are passed with the correct dataType
Product.propTypes = {
  product: PropTypes.shape({
    company: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  width: 25vw;
  min-height: 50vh;
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--main-cool-green-color);
    border: none;
    color: var(--main-gray-color);
    font-size: 1.8rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1.2s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--main-vivid-color);
    background: var(--main-bg);
    cursor: pointer;
  }
`;
