import React from "react";
import { Slide as SpectacleSlide, Layout, Fill } from "spectacle";

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
      align="flex-start flex-start"
      padding="0 0 0 10vw"
    >
      <div
        className="slide-content-breadcrumb"
        style={{ position: "absolute", top: "10vh" }}
      >
        <Heading caps size={6} fontWeight={500} textColor={COLORS.NEW.DARK_900}>
          {breadcrumb}
        </Heading>
        <Bar width="3.6vw" height="0.6vh" margin="2vh 0 0" />
      </div>
      <Layout style={{ paddingTop: "25vh" }}>
        <Fill>
          <Heading
            size={5}
            suffix={slideTitleSuffix}
            textColor={COLORS.NEW.DARK_900}
            suffixColor={COLORS.NEW.GREEN_500}
          >
            {slideTitle}
          </Heading>
        </Fill>
        <Fill style={{ minHeight: "100%", fontWeight: 400 }}>{children}</Fill>
      </Layout>
    </SpectacleSlide>
  );
};

export default Content;
