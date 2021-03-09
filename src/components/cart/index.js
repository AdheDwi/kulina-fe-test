import React from "react";
import {
  CartCardWrapper,
  CartCard,
  CartItems,
  CartText,
  CartInfo,
  CartLink,
} from "./index.styles";

const CartPopup = (props) => {
  return (
    <CartCardWrapper>
      <CartCard>
        <CartItems>
          <CartText>3 Items | Rp 60000</CartText>
          <CartInfo>Termasuk ongkos kirim</CartInfo>
        </CartItems>
        <CartLink href="#">
          <span className="material-icons">shopping_cart</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </CartLink>
      </CartCard>
    </CartCardWrapper>
  );
};

export default CartPopup;
