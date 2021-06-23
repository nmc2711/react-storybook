import styled from "styled-components";
export interface ICheckBoxProps {
  status: boolean;
  callback?: () => void;
  size?: number;
  bgColor?: string;
  label?: {
    text: string;
    id: string;
    position: "right" | "left";
  };
}
export default function CustomCheckBox(props: ICheckBoxProps) {
  const { status, callback, size, bgColor, label } = props;
  return (
    <CheckboxContainer>
      <CheckBox
        id={label && label.id}
        status={status}
        type="checkbox"
        className={`${status === true && "on"}`}
        onChange={callback}
        size={size}
        bgColor={bgColor}
      />
      {label && (
        <label htmlFor={label.id} className={`${label.position}`}>
          {label.text}
        </label>
      )}
    </CheckboxContainer>
  );
}
// styled
const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  & > label {
    cursor: pointer;
    &.left {
      float: left;
      margin-right: 8px;
    }
    &.right {
      float: right;
      margin-left: 8px;
    }
  }
`;
const CheckBox = styled.input`
  position: relative;
  width: ${(props: ICheckBoxProps) =>
    props.size ? `${props.size}px` : "24px"};
  height: ${(props: ICheckBoxProps) =>
    props.size ? `${props.size}px` : "24px"};
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 4px;
  appearance: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &::before {
    content: "";
    position: absolute;
    width: 13%;
    height: 50%;
    top: 28%;
    left: 55%;
    background-color: #e0e0e0;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-radius: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 13%;
    background-color: #e0e0e0;
    top: 50%;
    left: 17%;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-radius: 10px;
  }
  &.on {
    border-color: ${(props: ICheckBoxProps) =>
      props.bgColor ? `${props.bgColor}` : "#632beb"};
    background-color: ${(props: ICheckBoxProps) =>
      props.bgColor ? `${props.bgColor}` : "#632beb"};
    transition: 0.2s all ease 0s;
    &::before,
    &::after {
      background-color: #fff;
    }
  }
`;
// default state checkbox
CustomCheckBox.defaultProps = {
  status: false,
  size: 24,
  backgroundColor: "#632beb",
};
