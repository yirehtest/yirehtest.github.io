import React from "react";
import { Container } from "react-bulma-components/dist";

import Product from "../components/Product";

const Category = ({ products }) => {
  const productsMap = [];
  const len = products.length;

  const iterations = Math.ceil(len / 3);
  const residuo = len % 3;

  for (let index = 0; index < len; index = index + 3) {
    productsMap.push(
      <Container key={index}>
        <div className="columns">
          <div className="column">
            <Product product={products[index]}></Product>
          </div>

          <div className="column">
            <Product product={products[index + 1]}></Product>
          </div>

          <div className="column">
            <Product product={products[index + 2]}></Product>
          </div>
        </div>
      </Container>
    );
  }

  const lastProducts = [];
  if (residuo && iterations > 1) {
    for (
      let index = products.length - residuo;
      index < products.length;
      index++
    ) {
      lastProducts.push(
        <div key={index} className="column">
          <Product product={products[index]}></Product>
        </div>
      );
    }
  }
  return (
    <>
      {productsMap}
      {/* <Container>
        <div className="columns">{lastProducts}</div>
      </Container> */}
    </>
  );
};

export default Category;
