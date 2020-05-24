import React, { Component } from "react";

export default class PaletteFooter extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <div className='PaletteFooter'>
        <footer className='palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}
