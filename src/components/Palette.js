import React, { Component } from "react";
import "./Palette.css";

import ColorBox from "./ColorBox";

// https://github.com/react-component/slider
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

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
        <div className='palette-colors'>
          {/* all of color boxs*/}
          <Slider
            min={100}
            max={900}
            step={100}
            defaultValue={level}
            onAfterChange={this.changeLevel}
          />
          {ColorBoxs}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
