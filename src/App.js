import React from "react";
import Sales from "./pages/Sales";
import products from "./data/products.json";
import categories from "./data/categories.json";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { ThemeProvider } from "styled-components";
const theme = {
  palette: {
    blue: "#3273dc",
  },
  nav: {
    size: { pc: "70px", mobile: "70px" },
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sales {...{ products, categories }} />
    </ThemeProvider>
  );
}

export default App;
