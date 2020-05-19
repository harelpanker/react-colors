import React, { Component } from "react";

// https://github.com/react-component/slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className='Navbar'>
        <div className='logo'>
          <a href='/'>Color Picker</a>
        </div>
        <div className='slider-container'>
          {/* Slider */}
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={level}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
