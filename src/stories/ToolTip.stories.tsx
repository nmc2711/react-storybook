import React, { useState, useEffect, useCallback } from "react";
import Tooltip from "./ui/tooltip/Tooltip";

export default {
  title: "Custom-UI/Tooltip",
};

export const Default = () => {
  return (
    <div style={{ margin: "60px 60px" }}>
      <Tooltip content="기본 툴팁 메시지">
        <button>아무것도 지정안한 기본 툴팁</button>
      </Tooltip>
    </div>
  );
};

export const Direction = () => {
  return (
    <div style={{ margin: "100px 100px" }}>
      <Tooltip content="위쪽 방향 툴팁" direction="top">
        <button>위쪽</button>
      </Tooltip>
      <br />
      <Tooltip content="오른쪽 방향 툴팁" direction="right">
        <button>오른쪽</button>
      </Tooltip>
      <br />
      <Tooltip content="아래쪽 방향 " direction="bottom">
        <button>아래쪽</button>
      </Tooltip>
      <br />
      <Tooltip content="왼쪽 방향 툴팁 " direction="left">
        <button>왼쪽</button>
      </Tooltip>
    </div>
  );
};
