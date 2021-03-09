import React from "react";
import NumberFormat from "react-number-format";
import {
  CardProduct,
  CardProductHeader,
  CardProductBody,
  ProductImage,
  ProductTitle,
  ProductRating,
  ProductOwner,
  ProductAction,
  ProductPrice,
  AddButton,
} from "./index.styles";

import DataProducts from "./product.json";

const Products = (props) => {
  return (
    <>
      {DataProducts.map((product) => (
        <CardProduct key={product.id}>
          <CardProductHeader>
            <ProductImage src={product.image} alt={product.name} />
          </CardProductHeader>
          <CardProductBody>
            <ProductRating>
              {product.rating} <span className="material-icons">start</span>
            </ProductRating>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductOwner>by Kulina &bull; {product.owner}</ProductOwner>
            <ProductAction>
              <NumberFormat
                prefix={"Rp "}
                thousandSeparator
                displayType="text"
                value={product.price}
                renderText={(value) => <ProductPrice>{value}</ProductPrice>}
              />
              <AddButton>
                Add <span className="material-icons">add</span>
              </AddButton>
            </ProductAction>
          </CardProductBody>
        </CardProduct>
      ))}
    </>
  );
};

export default Products;
