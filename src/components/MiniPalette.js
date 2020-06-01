import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation(); // will not redirect us to the palatte url
    this.props.handleDelete(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick } = this.props;

    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}></div>
    ));
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteOutlinedIcon
          className={classes.deleteIcon}
          onClick={this.deletePalette}
        />
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
}

export default withStyles(styles)(MiniPalette);
