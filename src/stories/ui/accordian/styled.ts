import styled from 'styled-components';

type TTableWrap = {
  bordered: boolean;
}

export const ItemHeading = styled.h2`
  width: 100%;
  
  button {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: inherit;
    height: 32px;
    padding: 10px;
    outline: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #fff;
  }

`;

export const ItemContent = styled.div`
  padding: 10px 40px 20px 80px;
  background-color: #ddd;
  overflow: hidden;
`;

export const AccordianTableWrap = styled.div<TTableWrap>`
  border-top: ${({ bordered }) => bordered ? '2px solid #000' : 'none'};
`;