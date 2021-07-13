import { FC, useRef, useEffect, useState } from "react";
import useObserveScroll from "./ui/observescroll/useObserverScroll";
import InfinityComponent from "./ui/observescroll";

const EV = [
  {
    title: "observeScroll1",
  },
  {
    title: "observeScroll2",
  },
  {
    title: "observeScroll3",
  },
  {
    title: "observeScroll4",
  },
];

export default {
  title: "Custom-UI/ObserveScrollDebounce",
};

export const Default = () => {
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
            {item.title}
            <Section />
          </InfinityComponent>
        );
      })}
    </>
  );
};

export const Section: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { entry } = useObserveScroll(ref, {
    threshold: 0.2,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;
  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        border: "1px solid #000",
        background: isVisible ? "#fff" : "black",
      }}
    >
      <div style={{ margin: "auto" }}>{children}</div>
    </div>
  );
};
