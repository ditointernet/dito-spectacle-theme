import React from "react";
import screen from "./screen";
import print from "spectacle/lib/themes/default/print";
import { Deck as SpectacleDeck } from "spectacle";

export const createTheme = () => ({ screen: screen(), print: print() });

export const Deck = ({ progress, ...props }) => (
  <SpectacleDeck
    showFullscreenControl={true}
    {...props}
    progress={progress ? "bar" : "none"}
    controls={false}
    theme={createTheme()}
    transitionDuration={200}
  />
);
