import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
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
  noClose,
}) => {
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
            {!noClose && <CloseButton onClick={hide}>X</CloseButton>}
          </Header>
          <Content>{modalContent}</Content>
          {type === "confirm" && (
            <>
              <button onClick={callbackFn}>확인</button>
              <button onClick={hide}>취소</button>
            </>
          )}

          {type === "callbackModal" && (
            <>
              <button onClick={callbackFn}>확인</button>
            </>
          )}
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default GlobalModal;
