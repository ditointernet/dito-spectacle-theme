import styled from "styled-components";
import { Heading as SpectacleHeading } from "spectacle";

import COLORS from "../colors";

const Heading = styled(SpectacleHeading)`
  font-weight: ${props => props.fontWeight + " !important"};

  &:after {
    font-weight: 700;
    color: ${props => props.suffixColor || COLORS.GREEN_500};
    content: '${props => props.suffix || ""}';
  }

  strong {
    font-weight: 700;
    font-size: ${props => props.boldTextSize || "inherit"};
  }
`;

export default Heading;
