import React, { Component } from "react";

// https://github.com/react-component/slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Palette.css";

import ColorBox from "./ColorBox";

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
          <div className='slider'>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={level}
              onAfterChange={this.changeLevel}
            />
          </div>

          {/* all of color boxs*/}
          {ColorBoxs}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
