import { useState, useEffect } from "react";
import Pagination from "./ui/pagination/Pagination";
import PaginationDot from "./ui/pagination/PaginationDot";
import { dummy } from "./ui/pagination/dummy";

export default {
  title: "Custom-UI/Pagination",
};

export const DotPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h3>유연한 Dot 페이지네이션</h3>
      <div
        style={{
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "4px solid rgb(99, 43, 235)",
        }}
      >
        Yes, 할수있다고 말하는 개발자의{" "}
        <b style={{ color: "rgb(99, 43, 235)" }}>
          {" "}
          &nbsp;{currentPage + "번째 PAGE"}
        </b>
      </div>
      <PaginationDot
        currentPage={currentPage}
        totalCount={2222}
        pageSize={10}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

// export const Default = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (pageNumber: any) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <h2 className="pageTitle">뷰영역</h2>
//       <Pagination
//         currentPage={currentPage}
//         totalItems={dummy.totalItems}
//         pageSize={8}
//         handlePageChange={handlePageChange}
//       />
//       <p className="currentPageLabel">현재 페이지: {currentPage}</p>
//     </>
//   );
// };
