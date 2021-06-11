import React, { useRef, useState } from "react";

export interface PaginationProps {
  className?: string;
  totalItems: number;
  pageSize: number;
  currentPage?: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { handlePageChange, totalItems, pageSize, currentPage = 1 } = props;

  const pageInput = useRef<any>();
  const totalPages = Math.ceil(totalItems / pageSize);
  const [inputVal, setInputVal] = useState(currentPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
      setInputVal(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
      setInputVal(currentPage + 1);
    }
  };

  const handleInputChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    handlePageChange(inputVal);

    pageInput.current!.blur();
  };

  return (
    <form className="pagination" onSubmit={handleSubmit}>
      <button
        className="button prev"
        onClick={handlePrevClick}
        type={"button"}
        aria-label={"Previous"}
        disabled={currentPage <= 1}
      >
        이전
      </button>
      <span className="text pageText">Page:</span>
      <input
        className="input"
        type="number"
        value={inputVal}
        onChange={handleInputChange}
        ref={pageInput}
      />
      <span className="text">of {totalPages}</span>
      <button
        className="button next"
        onClick={handleNextClick}
        type={"button"}
        aria-label={"Next"}
        disabled={currentPage >= totalPages}
      >
        다음
      </button>
    </form>
  );
};

export default Pagination;
