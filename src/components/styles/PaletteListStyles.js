import sizes from "./sizes";

export default {
  root: {
    backgroundColor: "#22366e",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 50,
  },
  container: {
    width: "70%",
    maxWidth: "1200px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "90%",
    },
    [sizes.down("xs")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
      // textDecoration: "none",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "30px",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: "20px",
    },
  },
};
