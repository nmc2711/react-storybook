import React, { useState, useEffect, useCallback } from "react";
import Search from "./ui/Search";

export default {
  title: "Custom-UI/Search",
  component: Search,
};

export const Default = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchValue.length === 0) {
      alert("한글자 이상 입력해주세요 !");
    } else {
      alert("검색후 실행될 이벤트 호출 완료");
    }
  };

  return (
    <Search
      name={"search"}
      placeholder={"검색어를 입력해주세요."}
      onChange={onChangeEvent}
      onSubmit={onSubmit}
      value={searchValue}
    />
  );
};
export const ColorTheme = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeEvent = (e: any) => {
    setSearchValue(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    if (searchValue.length === 0) {
      alert("한글자 이상 입력해주세요 !");
    } else {
      alert("검색후 실행될 이벤트 호출 완료");
    }
  };

  return (
    <Search
      name={"search"}
      placeholder={"검색어를 입력해주세요."}
      onChange={onChangeEvent}
      onSubmit={onSubmit}
      value={searchValue}
      style={{ themeColor: "blue" }}
    />
  );
};
