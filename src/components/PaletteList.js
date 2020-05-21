import React, { Component } from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>react color</h1>

        {/* {console.log(palettes)} */}
        {palettes.map((palette) => (
          <p>
            <Link to={`/palette/${palette.id}`} key={palette.id}>
              {palette.paletteName}
            </Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
