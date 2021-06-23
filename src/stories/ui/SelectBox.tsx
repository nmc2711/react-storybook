import React from "react";
import styled from "styled-components";
export interface ISelectBoxProps {
  state: {
    isOpen: boolean;
    selectIdx: number;
    boxList: Array<{
      value: any;
      text: string;
    }>;
  };
  optionChange: (value: innerChangeType) => void;
  firstVisible?: boolean;
  icon?: boolean;
  styling?: styleType;
}

type innerChangeType = {
  type?: string;
  value?: boolean;
  idx?: number;
};

type styleType = {
  fontSize?: string;
  lineColor?: string;
  borderRadius?: string;
  selectBordercolor?: string;
  selectFontColor?: string;
  optionCoutNumber?: string;
  optionHeight?: string;
  iconColor?: string;
  hoverFontcolor?: string;
};

export default function CustomSelectBox(props: ISelectBoxProps) {
  const { state, optionChange, styling, firstVisible } = props;

  const innerChangeOption = (arg: innerChangeType) => {
    optionChange(arg);
  };

  return (
    <SelectBoxContainer {...styling}>
      <div
        className="innerBox"
        tabIndex={-1}
        onBlur={() => {
          state.isOpen && innerChangeOption({ type: "open", value: false });
        }}
      >
        {/* 셀렉스크롤이 닫힌 경우의 ui */}
        <div
          className={`select ${state.isOpen ? "open" : "close"}`}
          onClick={(e) => {
            innerChangeOption({ type: "open", value: !state.isOpen });
          }}
        >
          {state.boxList[state.selectIdx].text}
        </div>
        {/* 셀렉스크롤이 열린 경우의 ui */}
        <div className={`optionBox ${state.isOpen ? "open" : "close"}`}>
          {state.boxList.map((item: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {firstVisible === false && index === 0 ? (
                  <></>
                ) : (
                  <div
                    className="option"
                    key={index}
                    onClick={(e) => {
                      innerChangeOption({ type: "select", idx: index });
                    }}
                  >
                    {item.text ? item.text : item.cdNm ? item.cdNm : ""}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </SelectBoxContainer>
  );
}
const SelectBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .innerBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    z-index: 1;
    font-size: ${(props: styleType) =>
      props.fontSize ? props.fontSize : "16px"};
    .select {
      display: flex;
      align-items: center;
      border: 1px solid
        ${(props: styleType) =>
          props.selectBordercolor ? props.selectBordercolor : "#632beb"};
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0px 12px;
      position: relative;
      color: ${(props: styleType) =>
        props.selectFontColor ? props.selectFontColor : "#632beb"};
      font-weight: 500;
      border-radius: ${(props: styleType) =>
        props.borderRadius ? props.borderRadius : "0px"};
      &:after {
        display: block;
        position: absolute;
        right: 10px;
        top: 40%;
        width: 12px;
        height: 12px;
        transform: translate(-50%, -40%) rotate(-135deg);
        border-left: 2px solid
          ${(props: styleType) =>
            props.iconColor ? props.iconColor : "#632beb"};
        border-top: 2px solid
          ${(props: styleType) =>
            props.iconColor ? props.iconColor : "#632beb"};
        content: "";
      }
      cursor: pointer;
      &.open {
        width: 100%;
        height: 100%;
        &:after {
          display: block;
          position: absolute;
          right: 10px;
          width: 12px;
          height: 12px;
          top: 60%;
          transform: translate(-50%, -60%) rotate(45deg);
          border-left: 2px solid
            ${(props: styleType) =>
              props.iconColor ? props.iconColor : "#632beb"};
          border-top: 2px solid
            ${(props: styleType) =>
              props.iconColor ? props.iconColor : "#632beb"};
          content: "";
        }
      }
    }
    .optionBox {
      overflow-y: auto;
      top: 100%;
      width: 100%;
      height: ${(props: styleType) =>
        props.optionCoutNumber ? props.optionCoutNumber : "300"}%;
      display: flex;
      position: absolute;
      background: #fff;
      margin-top: -1px;
      display: none;
      border: 1px solid
        ${(props: styleType) => (props.lineColor ? props.lineColor : "#8555f6")};
      box-sizing: border-box;
      &.open {
        display: block;
      }
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: #e5e5e5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #acacac;
      }
    }
    .option {
      display: flex;
      align-items: center;
      width: 100%;
      height: ${(props: styleType) =>
        props.optionHeight ? props.optionHeight : "40px"};
      padding: 0px 20px;
      font-size: 16px;
      box-sizing: border-box;
      color: #757575;
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
        color: ${(props: styleType) =>
          props.hoverFontcolor ? props.hoverFontcolor : "#632beb"};
      }
      &:active {
        background: #eee;
        color: #757575;
      }
      &.on {
        display: block;
      }
      &:last-child {
        border-bottom: none;
      }
      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
  }
  .selBox {
    display: flex;
    & > div {
      margin-right: 30px;
    }
  }
`;
