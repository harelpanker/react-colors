import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div className='ColorBox' style={{ background: background }}>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>See More</span>
      </div>
    );
  }
}

export default ColorBox;
