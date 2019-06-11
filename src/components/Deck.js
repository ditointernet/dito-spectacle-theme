import React from "react";
import theme from "../theme";
import { Deck as SpectacleDeck } from "spectacle";

const Deck = ({ progress, ...props }) => (
  <SpectacleDeck
    showFullscreenControl={true}
    {...props}
    progress={progress ? "bar" : "none"}
    controls={false}
    theme={{ screen: theme(), print: theme() }}
    transitionDuration={200}
    contentWidth={1200}
  />
);

export default Deck;
