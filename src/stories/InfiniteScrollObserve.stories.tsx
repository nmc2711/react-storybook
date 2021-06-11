import React, { useState, useEffect, useRef, useCallback } from "react";
import InfiniteScroll from "./ui/infinitescroll/InfiniteScroll";

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
      <h1>title이란 검색어로 검색했을때..</h1>
      {list.map((item, index) => {
        if (list.length === index + 1) {
          return (
            <div ref={lastElementRef} key={index + "item"}>
              {item}
            </div>
          );
        } else {
          return <div key={index + "item"}>{item}</div>;
        }
      })}
      <div>{loading && "로딩중..."}</div>
      <div>{error && "에러.."}</div>
    </>
  );
};
