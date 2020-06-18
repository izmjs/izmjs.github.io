import React, { useContext } from "react";
import styled from "@emotion/styled";
import Toggle from "../../../components/Toggle";
import { NightModeContext } from "../../../providers/NightModeProvider";
import logo from "../assets/izm.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <Toggle onClick={toggleTheme} mode={mode === "light"} />
    </Wrapper>
  );
};

export default Logo;
