import React from "react";
import ReactDOM from "react-dom";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
  AgreeBtn,
  BtnWrapper,
  CancelBtn,
} from "./styled";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
  callback?: () => void;
  type?: string;
  noClose?: boolean;
}

const GlobalModal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
  callback,
  type = "modal",
  noClose = false,
}) => {
  console.log(noClose)
  const callbackFn = () => {
    callback && callback();
    setTimeout(() => {
      hide();
    }, 50);
  };
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            {!noClose && <CloseButton onClick={hide} />}
          </Header>
          <Content>{modalContent}</Content>
          {type === "confirm" && (
            <BtnWrapper>
              <AgreeBtn onClick={callbackFn}>확인</AgreeBtn>
              <CancelBtn onClick={hide}>취소</CancelBtn>
            </BtnWrapper>
          )}
          {type === "callbackModal" && (
            <BtnWrapper>
              <AgreeBtn onClick={callbackFn}>확인</AgreeBtn>
            </BtnWrapper>
          )}
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default GlobalModal;
