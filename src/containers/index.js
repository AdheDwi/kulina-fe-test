import React, { useState, useEffect } from "react";
import moment from "moment-with-locales-es6";
import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";

import AddressHeader from "../components/header/address";
import CalendarHeader from "../components/header/calendar";
import DialogAddress from "../components/dialog";
import Product from "../components/product";
import CartPopup from "../components/cart";

import {
  TabWrapper,
  TabButton,
  DateText,
  ProductWrapper,
} from "./index.styles";

const Container = (props) => {
  const [tabActive, setTabActive] = useState("lunch");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [thisDate, setThisDate] = useState("");

  const dates = useSelector((state) => state.layout.dates);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + 2);
    const format = moment(newDate).locale("id").format("dddd, DD MMMM YYYY");
    if (!dates) {
      setThisDate(format);
    } else {
      setThisDate(dates);
    }
  }, [dates]);

  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <AddressHeader setDialogOpen={() => setDialogOpen(true)} />
        <CalendarHeader />
      </div>
      <ProductWrapper cartActive={items.length > 0}>
        <TabWrapper>
          <TabButton
            active={tabActive === "lunch"}
            onClick={() => setTabActive("lunch")}
          >
            Lunch
          </TabButton>
          <TabButton
            active={tabActive === "dinner"}
            onClick={() => setTabActive("dinner")}
          >
            Dinner
          </TabButton>
        </TabWrapper>
        <DateText>{thisDate}</DateText>
        <Product />
      </ProductWrapper>
      {items.length > 0 && <CartPopup />}
      {dialogOpen && (
        <Animated
          animationIn="backInUp"
          animationOut="backOutDown"
          isVisible={true}
        >
          <DialogAddress setDialogOpen={() => setDialogOpen(false)} />
        </Animated>
      )}
    </div>
  );
};

export default Container;
