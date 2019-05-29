import React from "react";
import { Slide as SpectacleSlide, Layout } from "spectacle";

import COLORS from "../colors";
import Heading from "../components/Heading";

const Separator = ({ number, text, ...props }) => {
  return (
    <SpectacleSlide
      {...props}
      textSize="5rem"
      textColor={COLORS.NEW.WHITE}
      bgColor={COLORS.NEW.GREEN_500}
      align="flex-start center"
    >
      <Layout style={{ alignItems: "center" }}>
        <Heading
          textSize="14rem"
          fontWeight={700}
          textColor={COLORS.NEW.GREEN_600}
          margin="0 2rem 0 0"
        >
          {number}
        </Heading>
        <Heading textSize="5.7rem" fontWeight={700}>
          {text}
        </Heading>
      </Layout>
    </SpectacleSlide>
  );
};

export default Separator;
