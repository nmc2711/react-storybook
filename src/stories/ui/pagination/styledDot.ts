import styled from "styled-components";

export const PaginationWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  height: 36px;
  background-color: #dfdfdf;
  list-style: none;
`;

export const Prev = styled.li<{ unVisible?: boolean }>`
  width: 10px;
  height: 10px;
  border-top: ${({ unVisible }) =>
    unVisible ? "2px solid #fff" : "2px solid rgb(99, 43, 235)"};
  border-right: ${({ unVisible }) =>
    unVisible ? "2px solid #fff" : "2px solid rgb(99, 43, 235)"};
  transform: rotate(-135deg);
  cursor: pointer;
`;

export const Next = styled.li<{ unVisible?: boolean }>`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  border-right: 2px solid rgb(99, 43, 235);
  border-top: ${({ unVisible }) =>
    unVisible ? "2px solid #fff" : "2px solid rgb(99, 43, 235)"};
  border-right: ${({ unVisible }) =>
    unVisible ? "2px solid #fff" : "2px solid rgb(99, 43, 235)"};
  transform: rotate(45deg);
  cursor: pointer;
`;

export const PageItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 24px; */
  padding: 0 8px;
  height: 24px;
  margin-right: 4px;
  background-color: ${({ active }) => (active ? "rgb(99, 43, 235)" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#222")};
  font-weight: 500;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
