import React, { useEffect, useState } from "react";

export interface DndProps {
  list: Array<String>;
  setList: (value: String[]) => void;
  draggingRef: React.MutableRefObject<any>;
  dragoverRef: React.MutableRefObject<any>;
}

export default function DragDropComponent(props: DndProps) {
  const { list, setList, draggingRef, dragoverRef } = props;
  const handleDragStart = (e: any, position: number) => {
    // DND할 아이템의 인덱스 위치를 기억
    draggingRef.current = position;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    // DND 위치값을 지정
    dragoverRef.current = position;
    const listCopy = [...list];
    const draggingRefContent = listCopy[draggingRef.current];
    listCopy.splice(draggingRef.current, 1);
    listCopy.splice(dragoverRef.current, 0, draggingRefContent);

    draggingRef.current = dragoverRef.current;
    dragoverRef.current = null;
    setList(listCopy);
  };

  const handleDragOver = (e: any) => {
    e.preventDefalut();
  };

  return { handleDragStart, handleDragEnter, handleDragOver };
}
