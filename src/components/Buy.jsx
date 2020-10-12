import mediaQuerie from "helpers/mediaQuerie";
import React from "react";
import styled from "styled-components";

import Modal from "./Modal";
import { H2, P1 } from "./Texts";

const Buy = ({ show, toogleModal }) => {
  return (
    <Modal id="ModalBuy" show={show} toogleModal={toogleModal}>
      <BuyLayout>
        <BuyContainer>
          <div>
            <H2>Lee a continuacion:</H2>
            <P1>
              Debes contactarnos por whatsapp +584241802341 para reservar tu
              compra.
            </P1>
            <H2>Formas de pago:</H2>
            <ol>
              <li className="is-size-4 is-size-5-mobile">
                Dolares en efectivo
              </li>
              <li className="is-size-4 is-size-5-mobile">
                Zelle:{" "}
                <a href="mailto:anakari182@gmail.com">anakari182@gmail.com</a>
              </li>
              <li className="is-size-4 is-size-5-mobile">
                Paypal (tiene el recargo de la comisión de paypal){" "}
                <a href="https://paypal.me/MCJO" target="_blank">
                  paypal.me/MCJO
                </a>
              </li>
              <li className="is-size-4 is-size-5-mobile">
                Pago movil: 04169380074 Mercantil (0105) CI 16032309
              </li>
              <li className="is-size-4 is-size-5-mobile">
                Transferencia Mercantil a nombre de Jainer Munoz CI 16032309
                corriente 0105 0035 46 1035 4637 84
              </li>
            </ol>
          </div>
        </BuyContainer>
      </BuyLayout>
    </Modal>
  );
};

const BuyLayout = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BuyContainerPc = mediaQuerie(`
  width:50vw;
  padding: 40px;
  
`);
const BuyContainer = styled.div`
  box-sizing: border-box;
  overflowy: scroll;
  background-color: #fff;
  padding: 20px 10px;

  ${BuyContainerPc}
`;

export default Buy;
