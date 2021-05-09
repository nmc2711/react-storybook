import React, { useState, useEffect } from "react";

export interface IScrollProps {
  apiCaller: () => void;
  listItem: any;
  listStyle: any;
}

export default function InfiniteScroll(props: IScrollProps) {
  const [page, setPage] = useState<number>(1);

  return <div>123</div>;
}
