import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    this.ChangeFormat = this.ChangeFormat.bind(this);
    console.log(this._shades);
  }

  ChangeFormat(val) {
    this.setState({ format: val });
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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className='palette'>
        <Navbar handleChange={this.ChangeFormat} showAllColors={false} />
        <div className='palette-colors'>{colorBoxes}</div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default SingleColorPalette;
