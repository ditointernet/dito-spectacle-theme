import styled from "styled-components";
import { Heading as SpectacleHeading } from "spectacle";

import COLORS from "../colors";

const Heading = styled(SpectacleHeading)`
  font-weight: ${props => props.fontWeight + " !important"};

  &:after {
    font-weight: 600;
    ${props => (props.suffix ? `content: '${props.suffix}';` : "")}
    color: ${props => props.suffixColor || COLORS.NEW.GREEN_500};
  }

  strong {
    font-weight: 800;
    ${props =>
      props.boldTextSize ? `font-size: '${props.boldTextSize}';` : ""}
  }
`;

export default Heading;
