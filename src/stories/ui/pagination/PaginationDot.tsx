import { usePagination, DOTS } from "./usePagination";
import { PaginationWrap, Prev, Next, PageItem, ItemWrapper } from "./styledDot";

export interface IPaginationComponentProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (pageCount: number) => void;
}

function PaginationComponent({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IPaginationComponentProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // currentpage 0 방어 code
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  // 마지막 페이지 번호 체크
  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (lastPage === currentPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  const onCurrentPageChange = (pageNumber: number | string) => {
    if (typeof pageNumber === "string") {
      // ... dot 체크
      return null;
    } else {
      onPageChange(pageNumber);
    }
  };

  return (
    <PaginationWrap>
      <ItemWrapper onClick={onPrevious}>
        <Prev unVisible={currentPage === 1} />
      </ItemWrapper>

      {paginationRange?.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return <PageItem>...</PageItem>;
        }
        return (
          <PageItem
            key={idx + "페이지네이션"}
            onClick={() => onCurrentPageChange(pageNumber)}
            active={currentPage === pageNumber}
          >
            {pageNumber}
          </PageItem>
        );
      })}

      <ItemWrapper onClick={onNext}>
        <Next unVisible={lastPage === currentPage} />
      </ItemWrapper>
    </PaginationWrap>
  );
}

export default PaginationComponent;
