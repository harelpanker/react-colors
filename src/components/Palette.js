import React, { Component } from "react";
// import { Link } from "react-router-dom";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.ChangeFormat = this.ChangeFormat.bind(this);
  }

  ChangeFormat(val) {
    this.setState({ format: val });
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    const { palette } = this.props;
    const { level, format } = this.state;

    const ColorBoxs = palette.colors[level].map((color) => (
      <ColorBox key={color.id} background={color[format]} name={color.name} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.ChangeFormat}
        />
        <div className='palette-colors'>
          {/* all of color boxs*/}
          {ColorBoxs}
        </div>
        <footer className='palette-footer'>
          {palette.paletteName}
          <span className='emoji'>{palette.emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
