// useDebounce.tsx
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    // 파라미터로 넘겨받은 value를 타이머로 랩핑을 하여 state 업데이트에 시간차를 준다.
    // 최종적으로 시간차를 준 state를 sideEffect의 depth로 활용하여 debounce 구현
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
