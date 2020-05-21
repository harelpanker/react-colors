import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        <h1>react color</h1>
        {palettes.map((palette) => (
          // console.log(palette)
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
