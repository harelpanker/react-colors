import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    [sizes.down("lg")]: {
      height: "auto",
    },
    maxWidth: "100%",
    overflowX: "hidden",
  },
  paletteColors: {
    height: "88vh",
    [sizes.down("lg")]: {
      height: "auto",
    },
  },
  goBack: {
    height: "50%",
    minHeight: "150px",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      cursor: "pointer",
      textAlign: "center",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textTransform: "uppercase",
      lineHeight: "30px",
      border: "none",
      textDecoration: "none",
      transition: "0.3s ease",
      zIndex: "5px",
    },
    [sizes.down("lg")]: {
      width: "25%",
      minHeight: "200px",
    },
    [sizes.down("md")]: {
      width: "50%",
    },
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
};
