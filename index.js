import screen from "./screen";
import print from "spectacle/lib/themes/default/print";

import colors from "./colors";

/**
 * Create the theme.
 */
export const createTheme = (name, custom) => ({
  screen: screen(name, custom),
  print: print()
});

export { Slide } from "./components";
export { colors };
