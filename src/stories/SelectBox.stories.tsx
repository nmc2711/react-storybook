import React, { useReducer } from "react";
import SelectBox from "./ui/SelectBox";
export default {
  title: "Custom-UI/SelectBox",
  component: SelectBox,
};

const initialValue = {
  isOpen: false,
  boxList: [
    { value: 0, text: "선택없음" },
    { value: 1, text: "바나나" },
    { value: 3, text: "고구마" },
    { value: 4, text: "오징어" },
    { value: 5, text: "감자" },
    { value: 6, text: "토마토" },
    { value: 7, text: "육포" },
    { value: 8, text: "스파게티" },
    { value: 9, text: "교촌치킨" },
    { value: 10, text: "빵" },
  ],
  selectIdx: 0,
};

type StateType = {
  isOpen: boolean;
  boxList: Array<{
    value: number;
    text: string;
  }>;
  selectIdx: number;
};

type ActionType = {
  type: string;
  idx?: number;
};

const selectReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "select":
      return {
        ...state,
        selectIdx: action.idx || 0,
        isOpen: false,
      };

    default:
      throw new Error();
  }
};

export const Default = () => {
  const [state, dispatch] = useReducer(selectReducer, initialValue);

  return (
    <div style={{ width: "200px", height: "40px" }}>
      <SelectBox state={state} optionChange={dispatch} />
    </div>
  );
};

export const StyleSelect = () => {
  const [state, dispatch] = useReducer(selectReducer, initialValue);

  const styling = {
    iconColor: "#000", // 아이콘 색상 변경
    selectBordercolor: "#333", // 셀렉트 선색상
    borderRadius: "1px", // 셀렉트 보더 라운딩
    hoverFontcolor: "orange", // 옵션에 마우스 오버시 폰트색 변경
    lineColor: "#333", // 옵션 하단 선 색깔
    selectFontColor: "#333", // 선택없음 보더컬러
  };

  return (
    <div style={{ width: "200px", height: "40px" }}>
      <SelectBox state={state} optionChange={dispatch} styling={styling} />
    </div>
  );
};

export const FirstOptionNoneSelect = () => {
  const [state, dispatch] = useReducer(selectReducer, initialValue);

  return (
    <div style={{ width: "200px", height: "40px" }}>
      <SelectBox state={state} optionChange={dispatch} firstVisible={false} />
    </div>
  );
};
