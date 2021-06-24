import React, { useState, useEffect, useCallback } from "react";
import KakaoMap from "./ui/kakaoMap/KakaoMap";

export default {
  title: "Custom-UI/KakaoMap",
};

export const Default = () => {
  return (
    <>
      <h2>에러가 발생해서.. fix 중입니다.. 잠시만 기다려주세요.</h2>
      <p>
        {" "}
        <b style={{ color: "red" }}>Error</b> : 0619 이후 배포후 전역객체
        윈도우에서 kakao:map 객체를 찾지못함
      </p>
    </>
  );
};
