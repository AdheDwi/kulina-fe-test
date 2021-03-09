import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
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
import { addCartAction } from "../../redux/actions/cart";

const Products = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      {DataProducts.map((product) => {
        let stars = [];
        for (var i = 0; i < product.rating; i++) {
          stars.push(<span className="material-icons">start</span>);
        }
        return (
          <CardProduct key={product.id}>
            <CardProductHeader>
              <ProductImage src={product.image} alt={product.name} />
            </CardProductHeader>
            <CardProductBody>
              <ProductRating>
                {product.rating.toFixed(1)} {stars}
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
                <AddButton onClick={() => dispatch(addCartAction(product))}>
                  Add <span className="material-icons">add</span>
                </AddButton>
              </ProductAction>
            </CardProductBody>
          </CardProduct>
        );
      })}
    </>
  );
};

export default Products;
