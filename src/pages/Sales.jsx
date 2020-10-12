import React from "react";
import styled from "styled-components";
import { Button, Container, Hero } from "react-bulma-components/dist";
import { H1, CatergoryTitle } from "components/Texts";

// import Product from "../components/Product";
import Category from "../components/Category";
import Navbar from "components/Navbar";

const Sales = ({ products, categories }) => {
  const total = products.reduce(
    (acc, value) => parseInt(acc.price || acc, 10) + parseInt(value.price, 10)
  );
  console.log({ total });
  const filteredCategories = categories.map((category) => {
    const filtered = products.filter((product) => product.type === category);
    return filtered;
  });
  const filteredCategoriesMap = filteredCategories.map((products, i) => {
    return products.length ? (
      <div key={i}>
        <div
          id={`${products[0].type.replace(" ", "_")}`}
          style={{ padding: "60px 0 20px 0" }}
        >
          <CatergoryTitle>{products[0].type}</CatergoryTitle>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Category key={i} products={products} />
        </div>
      </div>
    ) : null;
  });

  return (
    <MainLayout>
      <Navbar />
      <Container>
        <Hero>
          <div className="hero-body">
            <Container>
              <H1>Venta de garage online</H1>
            </Container>
          </div>
        </Hero>
        <CategoryContainer>{filteredCategoriesMap}</CategoryContainer>

        <BuyFixedContainer>
          <Button className="button is-primary">Comprar</Button>
        </BuyFixedContainer>
      </Container>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  overflow: scroll;
  width: 100vw;
  height: 100vh;
  padding-top: ${({ theme }) => theme.nav.size.mobile};
  @media (min-width: 800px) {
    padding-top: ${({ theme }) => theme.nav.size.pc};
  }
`;

const CategoryContainer = styled(Container)`
  margin-top: 40px;
`;

const BuyFixedContainer = styled.div`
  z-index: 200;
  height: initial;
  width: initial;
  position: fixed;
  bottom: 20px;
  right: 20px;
  position: fixed;
  bottom: 51px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    height: 0;
    width: 0;
  }
`;
export default Sales;
