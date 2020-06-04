import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FooterStyles";

class PaletteFooter extends Component {
  render() {
    const { paletteName, emoji, classes } = this.props;
    return (
      <div className='PaletteFooter'>
        <footer className={classes.paletteFooter}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteFooter);
