/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Container } from "react-bulma-components/dist";
import styled from "styled-components";

const Product = ({ product }) => {
  const [isModal, setisModal] = useState(false);

  const toogleModal = () => {
    setisModal(!isModal);
  };

  if (!product) {
    return null;
  }

  const {
    name,
    description,
    price,
    type,
    condition,
    availability,
    video,
  } = product;
  const { main } = product.pictures;

  const image = main.match("http")
    ? main
    : require("../assets/compress/" + main + ".jpg");

  const myImg = <IMG src={image} alt={name} />;
  return (
    <>
      {isModal && availability && (
        <Modal id="Modal" toogleModal={toogleModal}>
          <Container style={{ margin: "auto" }}>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">{myImg}</figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4 has-text-link">{name}</p>
                        <p className="subtitle is-6 has-text-weight-bold">
                          {price} Dólares
                        </p>
                        <p className="subtitle is-6">{condition}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p>{description}</p>
                    </div>
                    {video && (
                      <div className="content">
                        <a href={video} target="_blank">
                          Ver video
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Modal>
      )}
      <div
        className="card hoverable"
        style={{ position: "relative" }}
        onClick={toogleModal}
      >
        {!availability && <AvailableContainer>Vendido</AvailableContainer>}

        <div className="card-image">
          <figure className="image is-4by3">{myImg}</figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 has-text-link">{name}</p>
              <p className="subtitle is-6 has-text-weight-bold">
                {price} Dólares
              </p>
              <p className="subtitle is-6">{condition}</p>
            </div>
          </div>

          <div className="content">
            <p>{description}</p>
          </div>
          <div className="content">
            <p>{`#${type}`}</p>
          </div>
          {video && (
            <div className="content">
              <a href={video} target="_blank">
                Ver video
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Modal = ({ children, toogleModal }) => {
  return <ModalBack onClick={toogleModal}>{children}</ModalBack>;
};

const AvailableContainer = styled.p`
  position: absolute;

  left: 50%;
  font-size: 125px;
  z-index: 20;
  font-weight: bold;
  color: red;
  transform: rotateZ(43deg) translateX(-66%);
  top: 64%;
`;
const ModalBack = styled.div`
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const IMG = styled.img`
  margin: auto !important;
  height: 100% !important;
  width: auto !important;
`;

export default Product;
