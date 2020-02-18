import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../ContextApi";
import { NavLink } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="modal">
                  <div id="modal-body">
                    <h3>
                      The <span>{title}</span> is an excellent Choice
                    </h3>
                    <div>
                      <img src={img} alt={title} />
                    </div>
                    <div>
                      <p>
                        Total: <span>$ {price}</span>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <NavLink to="/products">
                        <button
                          className="btn-details"
                          onClick={() => closeModal()}
                        >
                          Products
                        </button>
                      </NavLink>
                      <NavLink to="/cart">
                        <button
                          className="btn-details"
                          onClick={() => closeModal()}
                        >
                          My Cart
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  #modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding: 2rem;
  }

  #modal-body p {
    font-size: 1.5rem;
    color: var(--main-cool-blue-color);
    margin-bottom: 1.5rem;
  }

  #modal-body p span {
    color: var(--main-dark-bg);
  }
  #modal-body h3 {
    color: var(--main-cool-blue-color);
  }

  #modal-body h3 span {
    color: var(--main-vivid-color);
  }

  .modal-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @keyframes modalopen {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
