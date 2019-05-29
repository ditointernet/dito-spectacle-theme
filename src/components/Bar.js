import styled from "styled-components";

import COLORS from "../colors";

const Bar = styled.hr`
  border: none;
  outline: none;
  background-color: ${props => props.bgColor || COLORS.NEW.GREEN_500};
  height: ${props => props.height || "0.8vh"};
  width: ${props => props.width || "6vw"};
  margin: ${props => props.margin || 0};
`;

export default Bar;
