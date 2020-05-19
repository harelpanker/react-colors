import React, { Component } from "react";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    const { palette } = this.props;
    const { level } = this.state;

    const ColorBoxs = palette.colors[level].map((color, i) => (
      <ColorBox key={i} background={color.hex} name={color.name} />
    ));
    return (
      <div className='Palette'>
        {/* Navbar */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='palette-colors'>
          {/* all of color boxs*/}
          {ColorBoxs}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
