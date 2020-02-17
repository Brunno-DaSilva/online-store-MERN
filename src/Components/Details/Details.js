import React, { Component } from "react";
import { ProductConsumer } from "../../ContextApi";
import { NavLink } from "react-router-dom";
import { ButtonContainer } from "../StyleComponents/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct[0];

          return (
            <div className="details-container">
              {/* Left col */}
              <div className="details-left">
                <div className="">
                  <img src={img} className="" alt={title} />
                </div>
              </div>
              {/* Right col */}
              <div className="details-right">
                <div className="details-right-title">
                  <h1>
                    model : <span>{title}</span>
                  </h1>
                  <h4 className="">
                    made by : <span className="">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price : <strong>$ {price}</strong>
                  </h4>
                  <h5 className="">About {title}:</h5>
                  <p className="">{info}</p>

                  {/* buttons */}
                  <div>
                    <NavLink to="/home">
                      <ButtonContainer>back to products</ButtonContainer>
                    </NavLink>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        // value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
