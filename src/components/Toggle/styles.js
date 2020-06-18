import styled from "@emotion/styled";

export const Label = styled.label`
  align-self: center;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #313949;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      transition: 0.4s;
      border-radius: 50%;
      background-color: #cabbbb;
    }
  }

  input {
    display: none;
  }

  input:checked + span {
    background-color: #eee;
  }

  input:checked + span:before {
    transform: translateX(26px);
    background: #2f3130;
  }
`;
