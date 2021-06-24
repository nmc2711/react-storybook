import React, { useState, useRef, useCallback } from "react";
import InfiniteScroll from "./ui/infinitescroll/InfiniteScroll";
import styled from "styled-components";

export default {
  title: "Custom-UI/InfiniteScrollObserve",
};

export const Default = () => {
  const query = "title";
  const url = "http://openlibrary.org/search.json";

  const [pageNumber, setPageNumber] = useState<number>(1);

  const { list, hasMore, loading, error } = InfiniteScroll({
    query,
    pageNumber,
    url,
  });

  const observer = useRef<any>();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <InfiniteHeader>
        " title " 이라는 검색어로 데이터를 조회했습니다.
      </InfiniteHeader>
      {list.map((item, index) => {
        if (list.length === index + 1) {
          return (
            <InfiniteItem ref={lastElementRef} key={index + "item"}>
              {item}
            </InfiniteItem>
          );
        } else {
          return <InfiniteItem key={index + "item"}>{item}</InfiniteItem>;
        }
      })}
      <Loading>{loading && "로딩중..."}</Loading>
      <Error>{error && "에러.."}</Error>
    </>
  );
};

const InfiniteHeader = styled.h1`
  padding: 10px;
  border: 4px solid #632beb;
  color: #222;
  font-size: 20px;
`;

const InfiniteItem = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding: 14px 20px;
  box-sizing: border-box;
  background-color: #632beb;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Loading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #632beb;
`;

const Error = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: red;
`;
