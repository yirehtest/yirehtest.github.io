import React from "react";
import Sales from "./pages/Sales";
import products from "./data/products.json";
import categories from "./data/categories.json";
import "react-bulma-components/dist/react-bulma-components.min.css";

function App() {
  return <Sales {...{ products, categories }} />;
}

export default App;
