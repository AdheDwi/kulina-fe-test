import styled from "styled-components";

export const CartCardWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0px 8px 24px;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;

export const CartCard = styled.div`
  width: 100%;
  background-color: #a23530;
  padding: 16px;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartItems = styled.div`
  max-width: 80%;
`;
export const CartText = styled.h3`
  margin: 0 0 8px;
  font-size: 16px;
`;
export const CartInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
export const CartLink = styled.a`
  padding: 8px;
`;
