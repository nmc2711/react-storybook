import styled from 'styled-components';

type TTableWrap = {
  bordered: boolean;
}

export const ItemHeading = styled.h2`
  width: 100%;
  margin: 0;
  button {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: inherit;
    height: 48px;
    padding: 10px;
    outline: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    background-color: #632beb;
    margin-bottom: 1px;
  }

`;

export const ItemContent = styled.div`
  padding: 10px 40px 20px 48px;
  background-color: #fff;
  font-size: 13px;
  overflow: hidden;
`;

export const ContentIMG = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

export const AccordianTableWrap = styled.div<TTableWrap>`
  border-top: ${({ bordered }) => bordered ? '2px solid #ddd' : 'none'};
`;