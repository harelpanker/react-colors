import sizes from "./sizes";
export default {
  paletteFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "6vh",
    fontWeight: "bold",
    padding: "0 7px",
    [sizes.down("lg")]: {
      height: "50px",
    },
  },
  emoji: {
    marginLeft: "7px",
    fontSize: "1.5rem",
  },
};
