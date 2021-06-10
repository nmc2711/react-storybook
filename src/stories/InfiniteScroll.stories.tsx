import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "./ui/InfiniteScroll";

export default {
  title: "Custom-UI/InfiniteScroll",
  component: InfiniteScroll,
};

export const Default = (props: any) => {
  const [page, setPage] = useState(1);

  const getList = async () => {
    const lists = await (
      await fetch(`https://randomuser.me/api/?page=${page}&result=50`)
    ).json();

    return lists.results;
  };

  return (
    <InfiniteScroll apiCaller={getList} setPage2={setPage}>
      <div>1234</div>
    </InfiniteScroll>
  );
};
