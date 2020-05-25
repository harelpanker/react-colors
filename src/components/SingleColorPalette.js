import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  paletteColors: { height: "89vh" },
  goBack: {
    height: "50%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      cursor: "pointer",
      textAlign: "center",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textTransform: "uppercase",
      lineHeight: "30px",
      border: "none",
      textDecoration: "none",
      transition: "0.3s ease",
      zIndex: "5px",
    },
  },
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    this.ChangeFormat = this.ChangeFormat.bind(this);
    // console.log(this._shades);
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
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.ChangeFormat} showAllColors={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
