import React from "react";
import Product from "../components/product";

const Container = (props) => {
  return (
    <div className="wrapper">
      <div className="product-wrapper">
        <Product />
      </div>
    </div>
  );
};

export default Container;
