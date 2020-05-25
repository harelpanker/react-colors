import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";

// https://www.npmjs.com/package/react-copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.3s ease",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.4 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.4 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,.7)" : "white",
    position: "absolute",
    right: "0",
    bottom: "0",
    padding: "5px",
    textTransform: "uppercase",
    letterSpacing: "1",
    fontSize: "12",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.4 ? "black" : "white",
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
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    opacity: "0",
    transform: "scale(0.1)",
    color: "white",
    "& h2": {
      fontWeight: "400",
      width: "100%",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "0",
      padding: "1rem",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "200",
    },
  },
  showMessage: {
    transitionDelay: "0.3s",
    transition: "all 0.4s ease-in-out",
    opacity: "1",
    transform: "scale(1)",
    zIndex: "20",
  },
};

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
            // className={`copy-overlay ${copied && "show"}`}
            className={`${classes.copyOverlay} ${
              copied && classes.showOverlay
            }`}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showMessage
            }`}>
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
