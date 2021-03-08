import React from "react";
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

const Products = (props) => {
  return (
    <CardProduct>
      <CardProductHeader>
        <ProductImage src="https://kln.imgix.net/production/Kamis.%20ikan%20Kembung.JPG?w=300" />
      </CardProductHeader>
      <CardProductBody>
        <ProductRating>
          4.0 <span class="material-icons">start</span>
        </ProductRating>
        <ProductTitle>Ikan Kembung Goreng dan Sayur Acar Kuning</ProductTitle>
        <ProductOwner>by Kulina &bull; Uptown Lunch</ProductOwner>
        <ProductAction>
          <ProductPrice>Rp 35.000</ProductPrice>
          <AddButton>
            Add <span class="material-icons">add</span>
          </AddButton>
        </ProductAction>
      </CardProductBody>
    </CardProduct>
  );
};

export default Products;
