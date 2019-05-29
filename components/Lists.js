import styled from "styled-components";

import COLORS from "../colors";

export const Item = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  &:before {
    color: ${COLORS.NEW.GREEN_500};
    font-weight: 700;
    position: absolute;
    margin-left: -1.5rem;
  }
`;

export const Unordered = styled.ul`
  list-style: none;
  margin: 0;

  ${Item} {
    &::before {
      content: "\\2022";
      font-size: 2rem;
      margin-top: -0.5rem;
    }
  }
`;

export const Ordered = styled.ol`
  list-style: none;
  margin: 0;

  counter-reset: dito-ol-counter;

  ${Item} {
    counter-increment: dito-ol-counter;

    &::before {
      content: counter(dito-ol-counter) ". ";
      margin-left: -1.5rem;
    }
  }
`;
