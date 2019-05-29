import React from "react";
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

const Cover = ({ variant, bgSrc, title, subtitle, titleSuffix, ...props }) => {
  const variantProps = variants[variant || 1];
  const imageGradient = `linear-gradient(122deg, #4b5398, rgba(74, 85, 150, 0.98) 7%, rgba(73, 87, 148, 0.95) 14%, rgba(70, 92, 143, 0.89) 21%, rgba(65, 101, 136, 0.79) 33%, rgba(58, 112, 126, 0.66) 42%, rgba(26, 167, 75, 0)), url("${bgSrc}")`;

  return (
    <SpectacleSlide
      {...props}
      bgColor={variantProps.bgColor}
      align="flex-start center"
      {...(variant === 4 ? { bgGradient: imageGradient } : {})}
    >
      {variant === 4 && (
        <Logo
          style={{ position: "absolute", top: "10vh" }}
          className="slide-cover-logo"
        />
      )}
      <Heading
        caps
        size={6}
        fontWeight={600}
        textColor={variantProps.textColor}
      >
        {subtitle}
      </Heading>
      <Heading
        size={3}
        fontWeight={700}
        margin="1rem 0 0"
        suffix={titleSuffix}
        textColor={variantProps.textColor}
        suffixColor={variantProps.suffixColor}
      >
        {title}
      </Heading>
      <Bar width="7vw" margin="2vh 0 0" />
    </SpectacleSlide>
  );
};

export default Cover;
