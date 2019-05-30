import COLORS from "../colors";

const screen = () => {
  const fonts = {
    primary: "Montserrat",
    secondary: "Fira Code",
    tertiary: "monospace"
  };

  const headingDefaults = {
    fontFamily: fonts.primary,
    fontWeight: 700,
    lineHeight: 1,
    margin: 0
  };

  return {
    colors: COLORS,
    fonts,
    googleFonts: [
      {
        name: "Montserrat",
        styles: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
      }
    ],
    fullscreen: {
      fill: COLORS.DARK_700
    },
    global: {
      body: {
        color: COLORS.DARK_900,
        background: COLORS.WHITE,
        fontFamily: fonts.primary,
        fontWeight: 600,
        fontSize: "62.5%",
        overflow: "hidden"
      },
      "_:-moz-tree-row(hover), .spectacle-deck": { perspective: "1000px" },
      "_:-moz-tree-row(hover), ul .appear": { display: "inline" },
      "html, body": { width: "100%", height: "100%", margin: 0, padding: 0 },
      "*": { boxSizing: "border-box" },
      ".spectacle-slide": {
        backgroundSize: "cover"
      },
      ".spectacle-slide > div": {
        padding: "0 0 0 10vw",
        WebKitBackdropFilter: "blur(5px)",
        backdropFilter: "blur(5px)"
      }
    },
    progress: {
      bar: {
        container: {
          position: "absolute",
          height: "1vh",
          width: "calc(100% - 4vh)",
          bottom: "1.5vh",
          left: "2vh",
          right: "2vh",
          zIndex: 100031,
          transition: "all 1s ease-in-out 0.2s"
        },
        bar: {
          height: "100%",
          borderRadius: "10vh",
          background: "rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease-out"
        }
      }
    },
    components: {
      content: { margin: "0" },
      image: { display: "block", margin: 0 },
      link: { textDecoration: "none" },
      listItem: { fontSize: "2.0rem" },
      list: { textAlign: "left", listStylePosition: "inside", padding: 0 },
      tableHeaderItem: { fontSize: "2.4rem", fontWeight: 800 },
      tableItem: { fontSize: "2.0rem" },
      table: { width: "100%" },
      s: { strikethrough: {} },
      heading: {
        h1: { ...headingDefaults, fontSize: "9.6rem", fontWeight: 800 },
        h2: { ...headingDefaults, fontSize: "8.0rem", fontWeight: 800 },
        h3: { ...headingDefaults, fontSize: "6.4rem", fontWeight: 800 },
        h4: { ...headingDefaults, fontSize: "4.8rem" },
        h5: { ...headingDefaults, fontSize: "3.2rem" },
        h6: { ...headingDefaults, fontSize: "1.6rem" }
      },
      text: {
        color: COLORS.DARK_900,
        fontSize: "2.0rem",
        fontFamily: fonts.primary,
        margin: 0
      }
    }
  };
};

export default screen;
