import React from "react";
import styled from "styled-components";

const Modal = ({ children, show, id, toogleModal, zIndex = 100 }) => {
  return (
    <>
      {show ? (
        <ModalBack id={id} onClick={toogleModal} zIndex={zIndex}>
          {children}
        </ModalBack>
      ) : null}
    </>
  );
};

const ModalBack = styled.div`
  overflow: scroll;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
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

export default Modal;
