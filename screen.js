import COLORS from "./colors";

const screen = (colorArgs = {}, fontArgs = {}) => {
  const colors = Object.assign({}, colorArgs, COLORS);
  let normalizedFontArgs = {};
  let googleFonts = {};

  Object.keys(fontArgs).forEach(key => {
    const value = fontArgs[key];
    const fontName = value.hasOwnProperty("name") ? value.name : value;

    normalizedFontArgs = { ...normalizedFontArgs, [key]: fontName };

    if (value.hasOwnProperty("googleFont") && value.googleFont) {
      googleFonts = { ...googleFonts, [key]: value };
    }
  });

  const fonts = normalizedFontArgs;

  const headingDefaults = {
    fontFamily: fonts.primary,
    fontWeight: 700,
    lineHeight: 1,
    margin: 0
  };

  return {
    colors,
    fonts,
    googleFonts,
    global: {
      body: {
        color: colors.NEW.DARK_900,
        background: colors.NEW.WHITE,
        fontFamily: fonts.primary,
        fontWeight: 600,
        fontSize: "62.5%",
        overflow: "hidden"
      },
      "_:-moz-tree-row(hover), .spectacle-deck": { perspective: "1000px" },
      "_:-moz-tree-row(hover), ul .appear": { display: "inline" },
      "html, body": { width: "100%", height: "100%", margin: 0, padding: 0 },
      "*": { boxSizing: "border-box" }
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
          zIndex: 1000,
          transition: "all 1s ease-in-out 0.2s"
        },
        bar: {
          height: "100%",
          borderRadius: "10vh",
          background: colors.quaternary,
          transition: "all 0.3s ease-out"
        }
      }
    },
    components: {
      blockquote: {
        textAlign: "left",
        position: "relative",
        display: "inline-block",
        margin: 20
      },
      quote: {
        borderLeft: `1px solid ${colors.primary}`,
        paddingLeft: 40,
        display: "block",
        color: colors.primary,
        fontSize: "4.9rem",
        lineHeight: 1,
        fontWeight: "bold"
      },
      cite: {
        color: colors.tertiary,
        display: "block",
        clear: "left",
        fontSize: "2rem",
        marginTop: "1rem"
      },
      content: {
        margin: "0"
      },
      codePane: {
        margin: 0,
        fontSize: "0.8rem",
        fontWeight: "normal",
        minWidth: "100%",
        maxWidth: 800
      },
      syntax: {
        fontFamily: fonts.tertiary,
        fontSize: "inherit",
        lineHeight: 1.5,
        direction: "ltr",
        textAlign: "left",
        wordSpacing: "normal",
        wordBreak: "normal",
        tabSize: 2,
        hyphens: "none",
        whiteSpace: "pre-wrap",
        padding: "0.5rem",
        margin: 0
      },
      code: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.tertiary,
        margin: 0,
        backgroundColor: "rgba(0,0,0,0.15)",
        padding: "0 10px",
        borderRadius: 3
      },
      goToAction: {
        borderRadius: "6px",
        fontFamily: fonts.primary,
        padding: "0.25em 1em",
        border: "none",
        background: "#000",
        color: "#fff",
        "&:hover": {
          background: colors.tertiary,
          color: "#000"
        }
      },
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
        color: colors.NEW.DARK_900,
        fontSize: "2.0rem",
        fontFamily: fonts.primary,
        margin: 0
      }
    }
  };
};

export default screen;
