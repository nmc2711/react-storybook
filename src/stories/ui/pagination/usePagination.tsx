import { useMemo } from "react";

export const DOTS = "...";

const range = (start: number, end: number) => {
  // 페이지네이션 배열화
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
  // length = 5 ? [1,2,3,4,5]
};

export interface IPaginationProp {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

export function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IPaginationProp) {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // ... Dot표기를 위한 최소한의 totalPageNumber
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    // 해당 flag를 세우는 이유?  현재보고있는 페이지를 5라고 가정한다면 1 ... 4 5 6 ... 99 (dot이 생기어야 맞다)
    // but 현재보고있는 페이지가 3이라고 가정한다면 1 ... 2 3 4 ... 99 (이전페이지가 1인데 dot이 생기면 이상하다)
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    // 해당 flag를 세우는 이유?  현재보고있는 페이지를 5라고 가정하고 마지막페이지를 7이라고 가정하자
    // 1 ... 456 ... 7 (마지막페이지가 7인데 굳이 ... 을 표시할 이유가없다)

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // 왼쪽 닷이 없을 상황
    if (!shouldShowLeftDots && shouldShowRightDots) {
      // 예상 패턴  1 2 3 4 ... 7
      let leftItemCount = 3 + 1 * siblingCount;
      // 4개노출
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // 오른쪽 닷이 없을 상황
    if (shouldShowLeftDots && !shouldShowRightDots) {
      // 예상 패턴 1 ... 24 25 26 27
      let rightItemCount = 3 + 1 * siblingCount;
      // 4개노출
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // 페이지가 4이상인 일반적인 상황
    if (shouldShowLeftDots && shouldShowRightDots) {
      // 예상 패턴 1 ... 14 15 16 ... 20
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}

export default usePagination;
