import React, { useState } from "react";
import {
  DialogWrapper,
  DialogCard,
  DialogHeader,
  DialogBody,
  DialogLabel,
  DialogInput,
  SearchWrapper,
  SearchList,
  IconWrap,
  TextSearch,
} from "./index.styles";

import DataLocation from "./location.json";

const DialogAddress = () => {
  const [searchList, setSearchList] = useState([]);

  let dataSearch;

  const changeSearch = (value) => {
    if (value.trim() && value.length > 2) {
      dataSearch = DataLocation.filter((location) =>
        location.name.includes(value)
      );
      setSearchList(dataSearch);
    } else {
      setSearchList([]);
    }
  };

  return (
    <DialogWrapper>
      <DialogCard>
        <DialogHeader>
          <button>
            <span className="material-icons">close</span>
          </button>
        </DialogHeader>
        <DialogBody>
          <DialogLabel>Cek makanan yang tersedia di lokasi kamu!</DialogLabel>
          <DialogInput>
            <span className="material-icons">location_on</span>
            <input
              placeholder="Cari lokasimu"
              onChange={(e) => changeSearch(e.target.value)}
            />
          </DialogInput>
          <SearchWrapper>
            {searchList?.map((location) => (
              <SearchList key={location.id}>
                <IconWrap>
                  <span className="material-icons">location_on</span>
                </IconWrap>
                <TextSearch>
                  <h3>{location.name}</h3>
                  <p>{location.detail}</p>
                </TextSearch>
              </SearchList>
            ))}
          </SearchWrapper>
        </DialogBody>
      </DialogCard>
    </DialogWrapper>
  );
};

export default DialogAddress;
