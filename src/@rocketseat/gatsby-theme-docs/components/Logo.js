import React, { useContext } from "react";
import styled from "@emotion/styled";
import { NightModeContext } from "../../../providers/NightModeProvider";
import Moon from "../../../components/Icons/Moon";
import Sun from "../../../components/Icons/Sun";
import logo from "../assets/izm.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    border-radius: 50%;
    transition: 0.3s all;

    &:hover {
      background: #a1684161;
      transition: 0.3s all;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Flex = styled.div`
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

const Logo = () => {
  const { mode, toggleTheme } = useContext(NightModeContext);

  return (
    <Wrapper>
      <Flex>
        <span>
          <img src={logo} alt="IZMjs" className="logo__image" />
        </span>
        <span className="logo__title">izmjs</span>
      </Flex>
      <button type="button" onClick={toggleTheme}>
        {mode === "light" ? <Moon /> : <Sun />}
      </button>
    </Wrapper>
  );
};

export default Logo;
