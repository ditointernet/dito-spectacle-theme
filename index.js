import screen from "./screen";
import print from "spectacle/lib/themes/default/print";

export const createTheme = (name, custom) => ({
  screen: screen(name, custom),
  print: print()
});
