import React from "react";
import styled from "styled-components";
import { Slide as SpectacleSlide } from "spectacle";

import COLORS from "../colors";
import { Bar, Heading } from "../components";

import { ReactComponent as Logo } from "../logo.svg";

const variants = {
  1: {
    bgColor: COLORS.NEW.DARK_900,
    textColor: COLORS.NEW.WHITE,
    suffixColor: COLORS.NEW.GREEN_500
  },
  2: {
    bgColor: COLORS.NEW.NAVY_700,
    textColor: COLORS.NEW.WHITE,
    suffixColor: COLORS.NEW.GREEN_500
  },
  3: {
    bgColor: COLORS.NEW.GRAY_50,
    textColor: COLORS.NEW.DARK_900,
    suffixColor: COLORS.NEW.GREEN_500
  },
  4: {
    bgColor: COLORS.NEW.DARK_900,
    textColor: COLORS.NEW.WHITE,
    suffixColor: COLORS.NEW.GREEN_500
  }
};

const Cover = ({
  variant,
  bgSrc,
  bgBlur,
  title,
  subtitle,
  titleSuffix,
  ...props
}) => {
  const variantProps = variants[variant || 1];
  const imageGradient = `linear-gradient(122deg, #4b5398, rgba(74, 85, 150, 0.98) 7%, rgba(73, 87, 148, 0.95) 14%, rgba(70, 92, 143, 0.89) 21%, rgba(65, 101, 136, 0.79) 33%, rgba(58, 112, 126, 0.66) 42%, rgba(26, 167, 75, 0)), url("${bgSrc}")`;

  return (
    <SlideWrapper bgBlur={bgBlur}>
      <SpectacleSlide
        {...props}
        bgColor={variantProps.bgColor}
        {...(variant === 4 ? { bgGradient: imageGradient } : {})}
      >
        {variant === 4 && (
          <div
            className="slide-cover-logo"
            style={{ position: "absolute", top: "10vh" }}
          >
            <Logo />
            <Bar width="2vw" height="0.6vh" margin="2vh 0 0" />
          </div>
        )}
        <Heading
          caps
          size={6}
          fontWeight={500}
          textColor={variantProps.textColor}
        >
          {subtitle}
        </Heading>
        <Heading
          size={4}
          margin="1rem 0 0"
          suffix={titleSuffix}
          textColor={variantProps.textColor}
          suffixColor={variantProps.suffixColor}
        >
          {title}
        </Heading>
        <Bar width="7vw" margin="2vh 0 0" />
      </SpectacleSlide>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.section`
  .spectacle-slide {
    background-size: cover;

    > div {
      ${props => (props.bgBlur ? `backdrop-filter: blur(${props.bgBlur})` : "")}
    }
  }
`;

export default Cover;
