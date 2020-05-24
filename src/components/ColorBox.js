import React, { Component } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

// https://www.npmjs.com/package/react-copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

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
    const { background, name, id, paletteId, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.4;
    const isLightColor = chroma(background).luminance() >= 0.4;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={{ background: background }}>
          {/* The overlay div */}
          <div
            style={{ background: background }}
            // className={`copy-overlay ${copied && "show"}`}
            className={`copy-overlay ${copied ? "show" : ""}`}
          />
          <div className={`copy-msg ${copied ? "show" : ""}`}>
            <h2>Copied!</h2>
            <p className={isLightColor && "dark-text"}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {showLink ? (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                MORE
              </span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
