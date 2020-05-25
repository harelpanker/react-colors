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
            className={`copy-overlay ${copied ? "show" : ""}`}
          />
          <div className={`copy-msg ${copied ? "show" : ""}`}>
            <h2>Copied!</h2>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
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
