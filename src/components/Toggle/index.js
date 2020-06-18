import React from "react";
import { Label } from "./styles";

const Toggle = ({ onClick, mode }) => (
  <Label>
    <input type="checkbox" checked={mode} onChange={onClick} />
    <span onClick={onClick} />
  </Label>
);

export default Toggle;
