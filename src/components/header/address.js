import React from "react";
import {
  TopHeader,
  BackButton,
  AddressWrapper,
  AddressLabel,
  AddressButton,
} from "./header.styles";

const AddressHeader = () => {
  return (
    <TopHeader>
      <BackButton>
        <span className="material-icons">arrow_back</span>
      </BackButton>
      <AddressWrapper>
        <AddressLabel>Alamat Pengantaran</AddressLabel>
        <AddressButton>
          Nama Tempat<span className="material-icons">expand_more</span>
        </AddressButton>
      </AddressWrapper>
    </TopHeader>
  );
};

export default AddressHeader;
