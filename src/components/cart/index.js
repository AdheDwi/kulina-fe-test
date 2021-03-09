import React from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import {
  CartCardWrapper,
  CartCard,
  CartItems,
  CartText,
  CartInfo,
  CartLink,
} from "./index.styles";

const CartPopup = () => {
  const { sumPrice, items } = useSelector((state) => state.cart);
  return (
    <CartCardWrapper>
      <CartCard>
        <CartItems>
          <CartText>
            {items?.length} {`Item${items.length > 1 ? "s" : ""}`} |{" "}
            <NumberFormat
              prefix={"Rp "}
              thousandSeparator
              displayType="text"
              value={sumPrice}
            />
          </CartText>
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
