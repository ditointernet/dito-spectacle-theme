import styled from "styled-components";
import React from "react";

import COLORS from "../colors";

import Heading from "./Heading";

export const ItemDesc = props => (
  <Heading
    {...props}
    textSize="1.4rem"
    fontWeight={600}
    textColor={COLORS.GRAY_600}
  />
);

export const Item = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:before {
    color: ${COLORS.GREEN_500};
    font-weight: 700;
    position: absolute;
    margin-left: -1.5rem;
  }
`;

export const Unordered = styled.ul`
  list-style: none;
  margin: 0;

  ${Item} {
    font-size: ${props => props.textSize || "1.2rem"};

    &::before {
      content: "\\2022";
      font-size: ${props => props.bulletSize || "2rem"};
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
    font-size: ${props => props.textSize || "2rem"};

    &::before {
      content: counter(dito-ol-counter) ". ";
      margin-left: -1.5rem;
    }
  }
`;
