// import React, { useState, useEffect, Children } from "react";
// import styled from "styled-components";

// export interface IScrollProps {
//   apiCaller: any;
//   setPage2: any;
//   children?: React.ReactNode;
// }

// export default function InfiniteScroll(props: IScrollProps) {
//   const { apiCaller, children, setPage2 } = props;

//   const [page, setPage] = useState<number>(1);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [user, setUser] = useState([{}]);

//   const handleScroll = (e: any) => {
//     const { scrollTop, clientHeight, scrollHeight } = e.current.target;

//     if (scrollHeight - scrollTop === clientHeight) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);

//       const newData = await apiCaller(page);

//       setUser((prev) => [...prev, ...newData]);

//       setPage2(page);
//     };
//     loadData();
//   }, [page]);

//   return <DD onScroll={handleScroll}>{children}</DD>;
// }

// const DD = styled.div``;
