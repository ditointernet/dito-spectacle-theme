import styled from "styled-components";
import { Heading as SpectacleHeading } from "spectacle";

import COLORS from "../colors";
import { prop } from "../utils/functional";

const Heading = styled(SpectacleHeading)`
  font-weight: ${props => props.fontWeight + " !important"};

  &:after {
    font-weight: 600;
    color: ${props => props.suffixColor || COLORS.NEW.GREEN_500};
    content: '${prop("suffix", "")}';
  }

  strong {
    font-weight: 800;
    font-size: ${prop("boldTextSize", "inherit")};
  }
`;

export default Heading;
