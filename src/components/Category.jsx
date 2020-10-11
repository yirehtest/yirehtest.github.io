import React from "react";
import { Container } from "react-bulma-components/dist";

import Product from "../components/Product";

const Category = ({ products }) => {
  console.log("category", products);

  const productsMap = [];

  const iterations = Math.ceil(products.length / 3);
  const residuo = products.length % 3;
  console.log({ iterations, residuo });

  for (let index = 0; index < iterations; index = index + 3) {
    console.log({ index, iterations });
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
  console.log(
    "products.length  - residuo",
    products.length - residuo,
    products.length,
    { productsMap }
  );
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
  console.log({ lastProducts, residuo, iterations });
  return (
    <>
      {productsMap}
      <Container>
        <div className="columns">{lastProducts}</div>
      </Container>
    </>
  );
};

export default Category;
