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
      <p>기본 닫기만 적용되는 Alert 모달입니다.</p>
    </React.Fragment>
  );

  return (
    <>
      <button onClick={toggle}>기본닫기 모달호출</button>
      <GlobalModal isShown={isShown} hide={toggle} modalContent={content} />
    </>
  );
};

export const AgreeBasicAlert = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>반갑습니다.</div>
      <p>확인 버튼이 있는 모달입니다. 기본기능으로는 모달이 닫힙니다.</p>
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
        type="callbackModal"
      />
    </>
  );
};

export const AgreeAlertCallback = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>반갑습니다.</div>
      <p>
        확인 버튼이 있는 모달입니다. 확인버튼을 누르면 전달한 이벤트가 먼저
        실행되고 모달이 종료됩니다.
      </p>
    </React.Fragment>
  );

  return (
    <>
      <button onClick={toggle}>확인콜백 얼럿 호출</button>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="알림"
        type="callbackModal"
        callback={() => alert("이벤트 작동")}
      />
    </>
  );
};

export const ConfirmBasic = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>반갑습니다.</div>
      <p>기본 취소,확인 모두 창이 닫히는 컨펌 모달입니다.</p>
    </React.Fragment>
  );

  return (
    <>
      <button onClick={toggle}>기본닫기 컨펌모달호출</button>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        type="confirm"
      />
    </>
  );
};

export const ConfirmCallback = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>반갑습니다.</div>
      <p>
        확인을 누르면 전달된 이벤트를 실행후 모달을 종료하는 컨펌 모달입니다.
      </p>
    </React.Fragment>
  );

  return (
    <>
      <button onClick={toggle}>컨펌콜백 모달호출</button>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        type="confirm"
        headerText="알림"
        callback={() => alert("컨펌이벤트 실행")}
        noClose={true}
      />
    </>
  );
};
