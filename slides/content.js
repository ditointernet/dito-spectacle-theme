import React from "react";
import { Slide as SpectacleSlide } from "spectacle";

import COLORS from "../colors";
import Bar from "../components/Bar";
import Heading from "../components/Heading";

const Content = ({
  breadcrumb,
  slideTitle,
  slideTitleSuffix,
  children,
  ...props
}) => {
  return (
    <SpectacleSlide
      {...props}
      textSize="1.6rem"
      textColor={COLORS.NEW.DARK_900}
      bgColor={COLORS.NEW.WHITE}
    >
      <div
        className="slide-content-breadcrumb"
        style={{ position: "absolute", top: "10vh", left: "10vw" }}
      >
        <Heading caps size={6} fontWeight={500} textColor={COLORS.NEW.DARK_900}>
          {breadcrumb}
        </Heading>
        <Bar width="3.6vw" height="0.6vh" margin="2vh 0 0" />
      </div>
      <div
        className="slide-content-wrapper"
        style={{
          position: "absolute",
          left: "10vw",
          top: "30vh",
          maxWidth: "70vw"
        }}
      >
        <Heading
          size={5}
          suffix={slideTitleSuffix}
          textColor={COLORS.NEW.DARK_900}
          suffixColor={COLORS.NEW.GREEN_500}
          style={{ float: "left", maxWidth: "35vw" }}
        >
          {slideTitle}
        </Heading>
        <div style={{ float: "right", maxWidth: "35vw", fontWeight: 400 }}>
          {children}
        </div>
      </div>
    </SpectacleSlide>
  );
};

export default Content;
