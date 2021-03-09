import styled from "styled-components";

export const TabWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
`;

export const TabButton = styled.button`
  width: 50%;
  height: 36px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.active ? "#424749" : "#f1f1f2")};
  background-color: ${(props) => (props.active ? "#424749" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#424749")};
  font-size: 14px;
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export const DateText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #424749;
`;
