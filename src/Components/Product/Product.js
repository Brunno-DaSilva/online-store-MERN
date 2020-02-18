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
        <div className="products-container">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="product-left"
                  onClick={() => value.handleDetails(id)}
                >
                  <NavLink to="/details">
                    <img src={img} alt={title} />
                  </NavLink>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="product-center">
            <div>
              <h2>
                {title} <span>${price}</span>
              </h2>
            </div>
            <div className="product-add-info">
              <h4></h4>
              <h4></h4>
            </div>

            <ProductConsumer>
              {value => {
                return (
                  <div className="btn-holder">
                    <div onClick={() => value.handleDetails(id)}>
                      <NavLink to="/details">
                        <button className="btn-details">Details</button>
                      </NavLink>
                    </div>

                    <div onClick={() => value.handleDetails(id)}>
                      <NavLink to="/home">
                        <button
                          className={inCart ? "in-cart" : "btn-add-cart"}
                          disabled={inCart ? true : false}
                          onClick={() => {
                            console.log("added to the cart");
                          }}
                        >
                          {inCart ? <p disabled>in cart</p> : <p>BUY</p>}
                        </button>
                      </NavLink>
                    </div>
                  </div>
                );
              }}
            </ProductConsumer>
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
  // .cards-container {
  //   border: 1px solid var(--main-gray-color);
  //   width: 20vw;
  //   height: 60vh;
  //   padding: 1rem;
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  //   align-items: center !important;
  // }
  // .card-footer-top,
  // .card-footer-bottom {
  //   // border: solid 1px red;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center
  //   margin-top: 1rem;
  // }
  // .card-footer-bottom {
  //   width: 100%;
  //   padding: 0.7rem;
  //   background: gray;
  // }

  // .card-footer-holder,
  // .card-img-holder {
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   align-items: center;
  //   flex-wrap: wrap;
  // }

  // .card-img-holder img {
  //   width: 20rem;
  //   height: 300px;
  //   transition: all 1s linear;
  // }

  // .btn-add-cart {
  //   padding: 0.5rem;
  //   font-size: 1rem;
  //   border: 0;
  //   color: var(--main-dark-gray);
  //   background-color: transparent;
  //   &:focus {
  //     outline: none;
  //   }
  // }

  // .btn-add-cart:hover {
  //   cursor: pointer;
  //   color: var(--main-vivid-color);
  //   border-radius: 4px;
  // }

  // .product-name {
  //   font-size: 1.2rem;
  //   color: var(--main-dark-gray);
  //   letter-spacing: 2px;
  // }
  // .product-price,
  // .product-price span {
  //   font-size: 1.2rem;
  //   color: var(--main-vivid-color);
  //   margin-left: 0.5rem;
  //   padding: 0.2rem;
  // }
`;
