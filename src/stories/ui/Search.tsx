import React from "react";
import styled from "styled-components";

export interface ISearchProp {
  name: string;
  placeholder: string;
  btnName?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  value: any;
  style?: styleType;
}

type styleType = {
  fontSize?: string;
  themeColor?: string;
};

export default function Search(props: ISearchProp) {
  const {
    name,
    placeholder,
    btnName,
    onChange,
    onSubmit,
    value,
    style,
  } = props;

  const searchBtnName = btnName ? btnName : "찾기";

  return (
    <SearchForm onSubmit={onSubmit} {...style}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      <button type="submit">{searchBtnName}</button>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin: 10px 0;
  position: relative;

  input {
    width: 100%;
    height: 24px;
    padding: 4px;
    border: ${(props: any) =>
      props.themeColor
        ? `2px solid ${props.themeColor}`
        : "2px solid mediumaquamarine"};
    border-right: none;
    color: #000;
    outline: none;
    &:focus {
      color: ${(props: any) =>
        props.themeColor ? `${props.themeColor}` : "mediumaquamarine"};
    }
  }

  button {
    width: 10%;
    height: 36px;
    background-color: ${(props: any) =>
      props.themeColor ? `${props.themeColor}` : "mediumaquamarine"};
    border: ${(props: any) =>
      props.themeColor
        ? `2px solid ${props.themeColor}`
        : "2px solid mediumaquamarine"};
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;
