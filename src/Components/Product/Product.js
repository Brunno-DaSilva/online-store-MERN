import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../ContextApi";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="card-main-container">
        <div className="cards-container">
          <div
            className="card-img-holder"
            onClick={() => console.log("Go to DETAILS")}
          >
            <NavLink to="/details">
              <img src={img} className="" alt={title} />
            </NavLink>
          </div>
          {/*Card Footer*/}
          <div className="card-footer-holder">
            <div className="card-footer-top">
              <p className="product-name"> {title}</p>
              <h5 className="product-price">
                <span className="mr-1 fas fa-dollar-sign"></span>
                {price}
              </h5>
            </div>
            <div className="card-footer-bottom">
              <button
                className="btn-add-cart"
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
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

//Make sure that the props are passed with the correct dataType
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    company: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .cards-container {
    width: 30vw;
    min-height: 30vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .card-footer-top,
  .card-footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .card-footer-holder,
  .card-img-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-img-holder img {
    width: 300px;
    height: 300px;
    transition: all 1s linear;
  }

  .btn-add-cart {
    width: 8vw;
    margin: 1rem;
    padding: 1.2rem;
    font-size: 2.1rem;
    border: 0;
    color: var(--main-vivid-color);
    background-color: var(--main-bg);
  }
  &:focus {
    outline: none;
  }

  .btn-add-cart:hover {
    cursor: pointer;
    background: var(--main-vivid-color);
    color: var(--main-bg);
    transition: all 1s linear;
  }

  .card-img-holder img:hover,
  btn-add-cart:hover {
    transform: scale(1.2);
  }

  .product-name {
    font-size: 1.8rem;
    color: var(--main-dark-gray);
  }
  .product-price,
  .product-price span {
    font-size: 1.8rem;
    color: var(--main-vivid-color);
    margin-left: 0.5rem;
    padding: 0.2rem;
  }
`;
