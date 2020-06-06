import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/izm.png";

const Logo = styled.div`
  width: 160px;
  height: 36px;
  display: flex;
  align-items: center;
  flex-direction: row;

  & > span {
    margin-right: 10px;
  }

  .logo__image {
    width: 36px;
    height: 36px;
  }

  .logo__title {
  }
`;

export default function () {
  return (
    <Logo>
      <span>
        <img src={logo} alt="IZMjs" className="logo__image" />
      </span>
      <span className="logo__title">izmjs</span>
    </Logo>
  );
}
