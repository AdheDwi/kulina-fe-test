import React, { useState, useEffect } from "react";
import moment from "moment-with-locales-es6";
import { useDispatch } from "react-redux";
import { setDateAction } from "../../redux/actions/layout";

import {
  BottomHeader,
  DateWrapper,
  ButtonDate,
  ScrollWrapper,
} from "./header.styles";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState([]);
  const [activeDate, setActiveDate] = useState("");

  useEffect(() => {
    const date = new Date();
    let datesCollection = [];

    for (var i = 2; i < 16; i++) {
      const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
      datesCollection.push({
        name: moment(newDate).locale("id").format("ddd"),
        day: moment(newDate).format("DD"),
        fullDate: moment(newDate).locale("id").format("dddd, DD MMMM YYYY"),
      });
    }

    setDateValue(datesCollection);
  }, []);

  useEffect(() => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + 2);
    const format = moment(newDate).format("DD");
    setActiveDate(format);
  }, []);

  const setDateLabel = (data) => {
    dispatch(setDateAction(data.fullDate));
    setActiveDate(data.day);
  };

  return (
    <BottomHeader>
      <DateWrapper>
        <ScrollWrapper>
          {dateValue?.map((date) => (
            <ButtonDate
              key={date.day}
              active={activeDate === date.day}
              thisDisable={date.name === "Sab" || date.name === "Min"}
              onClick={() => setDateLabel(date)}
              disabled={date.name === "Sab" || date.name === "Min"}
            >
              {date.name} <span>{date.day}</span>
            </ButtonDate>
          ))}
        </ScrollWrapper>
      </DateWrapper>
    </BottomHeader>
  );
};

export default CalendarHeader;
