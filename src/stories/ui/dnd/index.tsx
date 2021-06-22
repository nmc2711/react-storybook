import React, { useEffect, useState } from "react";
/***
 * @title : 드래그앤 드롭
 * @autor : 황상한
 * @pattern :
 * import useDnd from 'dnd';
 * const draggingRef = useRef();
   const dragoverRef = useRef();
   const [list, setList] = useState(['5678','테스트','테스트2123','테스트5689', '어디?', '저기?']);
   const { handleDragStart, handleDragEnter, handleDragOver } = useDnd({ list, setList, draggingRef, dragoverRef });
 *  <div
     onDragStart={(e) => handleDragStart(e, key)} -- 필수
     onDragOver={(e) => e.preventDefault()} -- 이벤트 버블 방지(필수)
     onDragEnter?={(e) => handleDragEnter(e, key)} --- 드래그하는 동시에 동적인 변경(선택)
     onDrop?={(e) => handleDragEnter(e, key)} --- 드랍하는 순간에만 변경(선택)
     draggable -- 필수
     >
 */

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
