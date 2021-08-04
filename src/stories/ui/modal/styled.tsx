import styled from "styled-components";
import CloseImg from '../../assets/close3.png';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;
export const HeaderText = styled.div`
  width: 100%;
  text-align: center;
  color: #632beb;
  font-weight: 600;
  font-size: 18px;
  
`;
export const CloseButton = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  margin-left: 10px;
  background: url(${CloseImg}) no-repeat center center / cover;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 20px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const AgreeBtn = styled.button`
  min-width: 120px;
  height: 38px;
  padding: 0 20px;
  background-color: #632beb;
  color:#fff;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
`

export const CancelBtn = styled.button`
  min-width: 120px;
  height: 38px;
  padding: 0 20px;
  background-color: #ccc;
  color:#fff;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
`