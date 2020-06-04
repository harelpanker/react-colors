import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
// Material-ui
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
// https://www.npmjs.com/package/react-copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      background,
      name,
      id,
      paletteId,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background: background }}>
          {/* The overlay div */}
          <div
            style={{ background: background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })}
          />
          <div
            className={classNames(classes.copyMessage, {
              [classes.showMessage]: copied,
            })}>
            <h2>Copied!</h2>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
