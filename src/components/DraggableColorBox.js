import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "black",
      transform: "scale(1.3)",
    },
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteIcon: {
    color: "white",
    padding: "5px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    transition: "all .3s ease-in-out",
  },
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div style={{ backgroundColor: props.color }} className={classes.root}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteOutlinedIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
