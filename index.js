import React from "react";
import screen from "./theme";
import { Deck as SpectacleDeck } from "spectacle";

// @import url(https://cdn.rawgit.com/tonsky/FiraCode/1.204/distr/fira_code.css);

export const createTheme = () => ({ screen: screen(), print: screen() });

export const Deck = ({ progress, ...props }) => (
  <SpectacleDeck
    showFullscreenControl={true}
    {...props}
    progress={progress ? "bar" : "none"}
    controls={false}
    theme={createTheme()}
    transitionDuration={200}
    contentWidth="1200px"
  />
);
