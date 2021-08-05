import { useState } from "react";
import Pagination from "./ui/pagination/Pagination";
import { dummy } from "./ui/pagination/dummy";

export default {
  title: "Custom-UI/Pagination",
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h2 className="pageTitle">뷰영역</h2>
      <Pagination
        currentPage={currentPage}
        totalItems={dummy.totalItems}
        pageSize={8}
        handlePageChange={handlePageChange}
      />
      <p className="currentPageLabel">현재 페이지: {currentPage}</p>
    </>
  );
};
