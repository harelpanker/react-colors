import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": { opacity: 1 },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity .5s ease-out",
    },
  },
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 50,
    backgroundColor: "#000000",
    /* background by SVGBackgrounds.com */
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // "& .fade-exit": { opacity: 1 },
    // "& .fade-exit-active": {
    //   opacity: 0,
    //   transition: "opacity .5s ease-out",
    // },
  },
  heading: { fontSize: "2rem" },
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
