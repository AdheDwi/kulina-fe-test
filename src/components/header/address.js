import React from "react";
import { useSelector } from "react-redux";
import {
  TopHeader,
  BackButton,
  AddressWrapper,
  AddressLabel,
  AddressButton,
} from "./header.styles";

const AddressHeader = (props) => {
  const locations = useSelector((state) => state.layout.locations);
  return (
    <TopHeader>
      <BackButton>
        <span className="material-icons">arrow_back</span>
      </BackButton>
      <AddressWrapper>
        <AddressLabel>Alamat Pengantaran</AddressLabel>
        <AddressButton onClick={props.setDialogOpen}>
          {locations || "Pilih lokasi"}
          <span className="material-icons">expand_more</span>
        </AddressButton>
      </AddressWrapper>
    </TopHeader>
  );
};

export default AddressHeader;
