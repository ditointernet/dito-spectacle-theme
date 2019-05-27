import React from "react";
import { Slide as SpectacleSlide } from "spectacle";

import COLORS from "../colors";
import Heading from "../components/Heading";

const Separator = ({ number, text, ...props }) => {
  return (
    <SpectacleSlide
      {...props}
      textSize="5rem"
      textColor={COLORS.NEW.WHITE}
      bgColor={COLORS.NEW.GREEN_500}
    >
      <div
        className="slide-separator-wrapper"
        style={{
          position: "absolute",
          left: "10vw",
          top: "40vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Heading
          size={5}
          textSize="12rem"
          textColor={COLORS.NEW.GREEN_600}
          margin="0 2rem 0 0"
          lineHeight="10rem"
          style={{ float: "left" }}
        >
          {number}
        </Heading>
        <Heading size={4} style={{ float: "left", maxWidth: "61vw" }}>
          {text}
        </Heading>
      </div>
    </SpectacleSlide>
  );
};

export default Separator;
