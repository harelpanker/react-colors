import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: 5,
    border: "1px solid black",
    padding: ".5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": { cursor: "pointer" },
  },
  colors: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    height: "150px",
    width: "100%",
    borderRadius: "7px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative",
    margin: "10px 0",
  },
  emoji: {
    marginLeft: ".5rem",
    fontSize: "1.5rme",
  },
  miniColor: {
    height: "100%",
    width: "100%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
  },
};
function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}></div>
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {/* mini color boxes */}
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
