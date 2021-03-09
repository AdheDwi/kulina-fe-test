import styled from "styled-components";

// Address Header Styles
export const TopHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`;

export const BackButton = styled.button`
  border: unset;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: #424749;
  margin-right: 8px;
  outline: none;
  cursor: pointer;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressLabel = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: #6e7679;
  margin-bottom: 4px;
`;

export const AddressButton = styled.button`
  padding: 0;
  border: unset;
  background-color: transparent;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #424749;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  span {
    font-size: 16px;
    color: #f9423a;
  }
`;

// Calendar Header Styles
export const BottomHeader = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 0 8px;
`;
export const DateWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
`;
export const ScrollWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
`;
export const ButtonDate = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 4px;
  font-size: 10px;
  font-weight: 400;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.active ? "#424749" : "#f1f1f2")};
  background-color: ${(props) => (props.active ? "#424749" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#424749")};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  span {
    margin-top: 4px;
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => (props.active ? "#ffffff" : "#424749")};
  }
`;
