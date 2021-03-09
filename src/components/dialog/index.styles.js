import styled from "styled-components";

export const DialogWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 375px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 5s;
  transition: 5s;
`;

export const DialogCard = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  background-color: #ffffff;
  bottom: 0;
  margin-top: 150px;
  border-radius: 12px 12px 0 0;
  padding: 8px 16px;
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: unset;
    outline: none;
    background-color: transparent;
    color: #424749;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const DialogBody = styled.div`
  padding: 16px 0;
  width: 100%;
`;

export const DialogLabel = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #424749;
  margin-bottom: 16px;
`;

export const DialogInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  span {
    position: absolute;
    top: 6px;
    left: 8px;
    color: #f9423a;
  }
  input {
    width: 100%;
    height: 36px;
    padding: 10px 10px 10px 40px;
    color: #424749;
    font-weight: 600;
    outline-color: #e2e4e4;
    border-radius: 4px;
    border: 1px solid #f1f1f2;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const SearchList = styled.div`
  display: flex;
  padding: 0 6px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  background-color: #e2e4e4;
  border-radius: 50%;
  font-size: 14px;
  margin-right: 8px;
  color: #6e7679;
  span {
    font-size: 22px;
  }
`;

export const TextSearch = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f1f2;
  width: calc(100% - 36px);
  h3 {
    font-size: 14px;
    color: #424749;
    margin: 0 0 4px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: #6e7679;
  }
`;
