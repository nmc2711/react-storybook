import React, { useState, useRef } from "react";
import useDnd from "./ui/dnd";

export default {
  title: "Custom-UI/Dnd",
};

export const Default = () => {
  const draggingRef = useRef();
  const dragoverRef = useRef();
  const [list, setList] = useState([
    "5678",
    "테스트",
    "테스트2123",
    "테스트5689",
    "어디?",
    "저기?",
  ]);

  const { handleDragStart, handleDragEnter, handleDragOver } = useDnd({
    list,
    setList,
    draggingRef,
    dragoverRef,
  });

  return (
    <div style={{ margin: "60px 60px" }}>
      {list &&
        list.map((item, key) => {
          return (
            <div
              onDragStart={(e) => handleDragStart(e, key)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDragEnter(e, key)}
              draggable
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};

export const Dragging = () => {
  const draggingRef = useRef();
  const dragoverRef = useRef();
  const [list, setList] = useState([
    "5678",
    "테스트",
    "테스트2123",
    "테스트5689",
    "어디?",
    "저기?",
  ]);
  const { handleDragStart, handleDragEnter, handleDragOver } = useDnd({
    list,
    setList,
    draggingRef,
    dragoverRef,
  });
  return (
    <div style={{ margin: "60px 60px" }}>
      {list &&
        list.map((item, key) => {
          return (
            <div
              onDragStart={(e) => handleDragStart(e, key)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, key)}
              draggable
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};
