import React from "react";
import { useModal } from "./ui/modal/useModal";
import GlobalModal from "./ui/modal/GlobalModal";
import styled from "styled-components";


export default {
  title: "Custom-UI/Modal & Confirm",
};

export const Default = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>
        이벤트 당첨 축하드립니다. <br />
        Yes, React의 스토리북 1주일 관람권에 당첨되셨습니다. <br />
        마음껏 보셔도 됩니다 :)
      </div>
      <IntroText>기본 닫기만 적용되는 Alert 입니다.</IntroText>
    </React.Fragment>
  );

  return (
    <>
      <ModalCallBtn onClick={toggle}>기본 닫기 Alert</ModalCallBtn>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="Yes, React 이벤트 당첨 !"
      />
    </>
  );
};

export const AgreeBasicAlert = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>개발자님 현재 이벤트에 정상적으로 응모하신걸로 확인되었습니다. <br />
           항상 저희 서비스를 이용해주셔서 감사합니다.
      </div>
      <IntroText>사용자 확인만 가능한 Alert 입니다.</IntroText>
    </React.Fragment>
  );

  return (
    <>
      <ModalCallBtn onClick={toggle}>기본 확인 Alert</ModalCallBtn>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="Yes, React 이벤트 접수확인"
        noClose={true}
        type="callbackModal"
      />
    </>
  );
};

export const AgreeAlertCallback = () => {
  const { isShown, toggle } = useModal();

  const content = (
    <React.Fragment>
      <div>정말로 블로그페이지로 이동하시겠어요? <br />
        이동을 원하시면 확인버튼 누르시고, <br />
        그렇지 않으면 닫기 버튼을 눌러주세요.
      </div>
      <IntroText>기본 확인버튼을 통한 콜백함수 실행 Alert 입니다.</IntroText>
    </React.Fragment>
  );

  return (
    <>
      <ModalCallBtn onClick={toggle}>콜백 확인 Alert</ModalCallBtn>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText="Yes, React 블로그로 이동하시겠어요 ?"
        type="callbackModal"
        callback={()=> window.open('https://yesreact.netlify.app/')}
      />
    </>
  );
};

export const ConfirmBasic = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>동의하신다면 확인 버튼을 눌러주시고, <br />
        동의하지않으신다면 취소 버튼을 눌러세요.
      </div>
      <IntroText>취소,확인을 통한 사용자의 응답을 듣는 Confirm 입니다.</IntroText>
    </React.Fragment>
  );

  return (
    <>
      <ModalCallBtn onClick={toggle}>확인/취소 Confirm</ModalCallBtn>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        type="confirm"
        headerText="Yes, React 이벤트 참여에 동의하십니까?"
        noClose={true}
      />
    </>
  );
};

export const ConfirmCallback = () => {
  const { isShown, toggle } = useModal();
  const content = (
    <React.Fragment>
      <div>동의하신다면 확인 버튼을 눌러주시고, <br />
        동의하지않으신다면 취소 버튼을 눌러세요.
      </div>
      <IntroText>확인버튼을 클릭스 콜백상황을 보여주는 Confirm 입니다.</IntroText>
    </React.Fragment>
  );

  return (
    <>
      <ModalCallBtn onClick={toggle}>확인콜백 Confirm</ModalCallBtn>
      <GlobalModal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        type="confirm"
        headerText="Yes, React 푸쉬알림을 받으시겠습니까? "
        callback={() => alert("확인후 푸쉬알람 콜백함수를 실행 하였습니다.")}
        noClose={true}
      />
    </>
  );
};


const ModalCallBtn = styled.button`
  height: 32px;
  padding: 0 10px;
  background-color: #fff;
  color:#632beb;
  font-weight: 500;
  outline: none;
  border: 1px solid #632beb;
  border-radius: 4px;
  cursor: pointer;
`;

const IntroText = styled.p`
  font-size: 12px;
  color: #bdbdbd;
  text-align: center;
`;