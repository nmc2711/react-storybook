import React, { useState, useRef } from "react";
import useDnd from "./ui/dnd";
import styled from "styled-components";

export default {
  title: "Custom-UI/Dnd",
};

export const Default = () => {
  const draggingRef = useRef();
  const dragoverRef = useRef();
  const [list, setList] = useState([
    "1. 성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
    "2. 구르지 않는 돌에게 필시 이끼 끼기 마련이다.",
    "3. 모든 일은 쉽기 전에는 어려운 법이다.",
    "4. 하루를 만나도 10년처럼.. 10년을 만나도 하루처럼.. ",
    "5. 우리는 오늘 이러고 있지만, 내일은 어떻게 될지 누가 알아요?",
    "6. 아무도 엿보지 않는데 그렇게 많이 나를 증명할 필요가 있다.",
  ]);

  const { handleDragStart, handleDragEnter, handleDragOver } = useDnd({
    list,
    setList,
    draggingRef,
    dragoverRef,
  });

  return (
    <DndWrap>
      {list &&
        list.map((item, key) => {
          return (
            <DndItem
              key={key}
              onDragStart={(e) => handleDragStart(e, key)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDragEnter(e, key)}
              draggable
            >
              {item}
            </DndItem>
          );
        })}
    </DndWrap>
  );
};

export const Dragging = () => {
  const draggingRef = useRef();
  const dragoverRef = useRef();
  const [list, setList] = useState([
    "1. 안된다고 말하는 개발자가 되고 싶지않습니다.",
    "2. Yes로 대답하는 개발자가 되고 싶습니다.",
    "3. 항상 잘하고 실수 없는 개발자가 될 수는 없겠죠.",
    "4. 하지만 실수를 인정하고 실수를 개선하여",
    "5. 실수에 대한 극복과정을 공유하는 개발자가 될 것입니다.",
    "6. Yes, Available ! ",
  ]);
  const { handleDragStart, handleDragEnter, handleDragOver } = useDnd({
    list,
    setList,
    draggingRef,
    dragoverRef,
  });
  return (
    <DndWrap>
      {list &&
        list.map((item, key) => {
          return (
            <DndItem
              key={key}
              onDragStart={(e) => handleDragStart(e, key)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, key)}
              draggable
            >
              {item}
            </DndItem>
          );
        })}
    </DndWrap>
  );
};

const DndWrap = styled.div`
  width: 400px;
  height: 600px;
  background-color: #fff;
`;

const DndItem = styled.div`
  margin-bottom: 8px;
  padding: 10px 12px;
  background-color: #632beb;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
`;
