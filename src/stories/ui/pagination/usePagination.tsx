import { useMemo } from "react";

export const DOTS = "...";

export interface IPagiProp {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}
// 각 페이지 섹션마다 page range 정의 함수 즉 2페이지에서는 시작 인수를 6, 3페이지에서는 시작인수를 11 이런 케이스구현
const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IPagiProp) => {
  const paginationRange = useMemo(() => {
    // 총 페이지의 갯수
    const totalPageCount = Math.ceil(totalCount / pageSize);
    // .. dot이 들어오는 최소 페이지 갯수
    const totalPageNumbers = siblingCount + 5;
    // 페이지 갯수 5가 넘어가지않는 경우
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
  }, []);
};
