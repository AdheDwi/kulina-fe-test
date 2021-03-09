import React from "react";
import {
  BottomHeader,
  DateWrapper,
  ButtonDate,
  ScrollWrapper,
} from "./header.styles";

const CalendarHeader = () => {
  return (
    <BottomHeader>
      <DateWrapper>
        <ScrollWrapper>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate active>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
          <ButtonDate>
            SEN <span>1</span>
          </ButtonDate>
        </ScrollWrapper>
      </DateWrapper>
    </BottomHeader>
  );
};

export default CalendarHeader;
