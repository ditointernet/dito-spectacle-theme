import styled from "styled-components";
import { Heading as SpectacleHeading } from "spectacle";

import COLORS from "../colors";

const Heading = styled(SpectacleHeading)`
  font-weight: ${props => props.fontWeight + " !important"};

  &:after {
    ${props => (props.suffix ? `content: '${props.suffix}';` : "")}
    color: ${props => props.suffixColor || COLORS.NEW.GREEN_500}
  }
`;

export default Heading;
