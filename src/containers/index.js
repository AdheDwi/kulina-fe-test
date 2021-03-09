import React from "react";
import AddressHeader from "../components/header/address";
import CalendarHeader from "../components/header/calendar";
import DialogAddress from "../components/dialog";
import Product from "../components/product";
import CartPopup from "../components/cart";

import { TabWrapper, TabButton, DateText } from "./index.styles";

const Container = (props) => {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <AddressHeader />
        <CalendarHeader />
      </div>
      <div className="product-wrapper">
        <TabWrapper>
          <TabButton active>Lunch</TabButton>
          <TabButton>Dinner</TabButton>
        </TabWrapper>
        <DateText>Kamis, 14 Maret 2021</DateText>
        <Product />
      </div>
      {/* <CartPopup /> */}
      <DialogAddress />
    </div>
  );
};

export default Container;
