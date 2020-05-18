import React, { Component } from "react";
import "./Palette.css";

import ColorBox from "./ColorBox";

class Palette extends Component {
  render() {
    const ColorBoxs = this.props.colors.map((color, i) => (
      <ColorBox key={i} background={color.color} name={color.name} />
    ));

    return (
      <div className='Palette'>
        {/* Navbar */}
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
