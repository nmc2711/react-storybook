/**
 * @subscribe : 스크롤시 IntersectionObserver되는 영역을 체크하여 (해당 element에 스크롤 도착시 애니메이션 또는 동적이벤트를 주기위한 용도로 사용가능)
 * @options : * rootMargin * 각 IntersectionObserver되는 아이템의 바텀으로 부터 체크할시점의 거리를 나타낸다.
 *          : * freezeOnceVisible * 스크롤시 이미 IntersectionObserver가 끝난 element를 체크된 상태를 롤백시킬지에 대한 옵션
 */
import { RefObject, useState, useEffect } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

interface Props {
  entry: IntersectionObserverEntry | undefined;
}

function useObserveScroll(
  elementRef: RefObject<HTMLElement | null>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args,
  page?: number
): Props {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(); // state 값에 IntersectionObserverEntry Setting..
  const frozen = entry?.isIntersecting && freezeOnceVisible; // 해당스크롤에 감시되고있는 ref의 target dom 잡혀있는지 check Flag..

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    if (!elementRef) return;
    const node = elementRef?.current;
    const hasIOsupport = window?.IntersectionObserver ?? false; // observer api 지원 확인
    if (!hasIOsupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams); // observer api setting up (콜백함수, 옵션)!

    observer.observe(node); // observing….

    return () => hasIOsupport && observer.disconnect(); // destroy…
  }, [elementRef, page, threshold, root, rootMargin, frozen]);

  return { entry };
}

export default useObserveScroll;
