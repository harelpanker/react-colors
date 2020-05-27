import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
  },
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div style={{ backgroundColor: props.color }} className={classes.root}>
      {props.name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
