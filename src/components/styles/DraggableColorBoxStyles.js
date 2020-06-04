import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover svg": {
      // color: "black",
      transform: "scale(1.3)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "200px",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "200px",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "150px",
    },
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.4 ? "white" : "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteIcon: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.4 ? "white" : "black",
    padding: "3px",
    // backgroundColor: "rgba(255, 255, 255, 0.2)",
    // borderRadius: "50%",
    transition: "all .3s ease-in-out",
  },
};
export default styles;
