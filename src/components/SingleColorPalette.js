import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    // return all shades of given color
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    //slice- to cut of the first element in the array (we donwt need the 50 only the 100-900)
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className='palette'>
        <h1>SingleColorPalette</h1>
        <div className='palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
