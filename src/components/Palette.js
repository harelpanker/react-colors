import React, { Component } from "react";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import "./Palette.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteColors: { height: "89vh" },
};

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
    const { palette, classes } = this.props;
    const { level, format } = this.state;

    const ColorBoxs = palette.colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={palette.id}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* Navbar */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.ChangeFormat}
          showAllColors={true}
        />
        <div className={classes.paletteColors}>
          {/* all of color boxs*/}
          {ColorBoxs}
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
