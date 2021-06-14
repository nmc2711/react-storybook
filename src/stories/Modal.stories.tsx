import React, { Component, FunctionComponent, useState } from "react";
import { useModal } from "./ui/modal/useModal";
import GlobalModal from "./ui/modal/GlobalModal";

export default {
  title: "Custom-UI/Modal",
};

export const Default = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>반갑습니다.</div>
      <p>확인 기능이 있는 모달입니다.</p>
    </React.Fragment>
  );

  return (
    <>
      <button onClick={toggle}>확인 모달 호출</button>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="알림"
      />
    </>
  );
};
