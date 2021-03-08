import styled from "styled-components";

export const CardProduct = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  position: relative;
`;

export const CardProductHeader = styled.div`
  margin-bottom: 8px;
  position: relative;
  height: 200px;
  width: 100%;
`;

export const CardProductBody = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 16px 16px;
`;

export const ProductImage = styled.img`
  left: 0px;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0 0;
`;

export const ProductRating = styled.div`
  color: #424749;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  span {
    color: #f9423a;
    font-size: 16px;
    margin-left: 4px;
  }
`;

export const ProductTitle = styled.h1`
  color: #424749;
  font-size: 16px;
  font-weight: 700;
`;

export const ProductOwner = styled.span`
  font-size: 12px;
  color: #6e7679;
  margin-top: 8px;
`;

export const ProductAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;
export const ProductPrice = styled.span`
  font-size: 16px;
  color: #424749;
  font-weight: 700;
`;
export const AddButton = styled.button`
  padding: 8px 16px;
  border: none;
  box-shadow: unset;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #f9423a;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  span {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;
