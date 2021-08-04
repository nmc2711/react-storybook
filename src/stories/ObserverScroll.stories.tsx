import { FC, useRef, useEffect, useState } from "react";
import InfinityComponent from "./ui/observescroll";
import styled from "styled-components";

const EV = [
  {
    title: "무한 스크롤링 섹션",
  },
  {
    title: "무한 스크롤링 섹션",
  },
];

export default {
  title: "Custom-UI/ObserveScrollDebounce",
};

export const InterSectionObserverScrolling = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [page, setPage] = useState(1);
  const [list, setList] = useState(EV);

  const scrollCallBack = () => {
    setList(list.concat(EV));
    setPage(page + 1);
  };

  useEffect(() => {
    //console.log(list);
  }, [page]);

  return (
    <>
      {list.map((item, key) => {
        return (
          <InfinityComponent
            ref={ref}
            key={`${key}-sectionScroll`}
            itemkey={key}
            leng={list.length}
            callback={scrollCallBack}
            rootmargin="-20% 0%"
          >
            <ScrollH1>{item.title} {key + 1}</ScrollH1>
            <Section />
          </InfinityComponent>
        );
      })}
    </>
  );
};

const Section: FC = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        border: "2px solid #632beb",
      }}
    >
      <div style={{ margin: "auto" }}>
        컨텐츠가 표현되는 영역입니다.
        {children}</div>
    </div>
  );
};

// 해당주석은 isintersecting을 감지해 랜딩 애니매이션과 같은 효과를 줄수있다.
// const Section: FC = ({ children }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const { entry } = useObserveScroll(ref, {
//     threshold: 0.2,
//     freezeOnceVisible: true,
//   });
//   const isVisible = !!entry?.isIntersecting;
//   return (
//     <div
//       ref={ref}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         border: "1px solid #632beb",
//         background: isVisible ? "#fff" : "black",
//       }}
//     >
//       <div style={{ margin: "auto" }}>{children}</div>
//     </div>
//   );
// };

const ScrollH1 = styled.h1`
  color: #632beb;
  font-size: 20px;
`;