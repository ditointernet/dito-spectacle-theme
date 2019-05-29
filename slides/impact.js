import React from "react";
import { Slide as SpectacleSlide } from "spectacle";

import COLORS from "../colors";
import { Bar, Heading } from "../components";

const variants = {
  1: {
    bgColor: COLORS.NEW.DARK_900,
    textColor: COLORS.NEW.WHITE,
    textSuffixColor: COLORS.NEW.GREEN_500,
    textSize: "3rem !important"
  },
  2: {
    bgColor: COLORS.NEW.NAVY_700,
    textColor: COLORS.NEW.WHITE,
    textSuffixColor: COLORS.NEW.GREEN_500,
    textSize: "3rem"
  },
  3: {
    bgColor: COLORS.NEW.GREEN_500,
    textColor: COLORS.NEW.WHITE,
    textSuffixColor: COLORS.NEW.NAVY_600,
    textSize: "3rem"
  },
  4: {
    bgColor: COLORS.NEW.GRAY_50,
    textColor: COLORS.NEW.DARK_900,
    textSuffixColor: COLORS.NEW.GREEN_500,
    titleSuffixColor: COLORS.NEW.GREEN_500,
    textSize: "4.2rem"
  }
};

const Impact = ({
  variant,
  breadcrumb,
  slideTitle,
  text,
  slideTitleSuffix,
  textSuffix,
  ...props
}) => {
  const variantProps = variants[variant || 1];

  return (
    <SpectacleSlide
      {...props}
      textSize={variantProps.textSize}
      textColor={variantProps.textColor}
      bgColor={variantProps.bgColor}
      align="flex-start center"
      padding="0 0 0 10vw"
    >
      {variant === 4 && (
        <div
          className="slide-impact-breadcrumb"
          style={{ position: "absolute", top: "10vh" }}
        >
          <Heading
            caps
            size={6}
            fontWeight={500}
            textColor={COLORS.NEW.DARK_900}
          >
            {breadcrumb}
          </Heading>
          <Bar width="3.6vw" height="0.6vh" margin="2vh 0 0" />
        </div>
      )}
      {variant === 4 && (
        <Heading
          size={5}
          margin="0 0 10vh"
          suffix={slideTitleSuffix}
          textColor={variantProps.textColor}
          suffixColor={variantProps.slideTitleSuffixColor}
        >
          {slideTitle}
        </Heading>
      )}
      <Heading
        textSize={variant === 4 ? "3rem" : "4.2rem"}
        boldTextSize={variant === 4 ? "3rem" : "4.8rem"}
        suffix={textSuffix}
        fontWeight={variant === 4 ? 400 : 500}
        textColor={variantProps.textColor}
        suffixColor={variantProps.textSuffixColor}
      >
        {text}
      </Heading>
    </SpectacleSlide>
  );
};

export default Impact;
