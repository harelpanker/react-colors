import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

// https://github.com/react-component/slider
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./styles/NavbarStyles";
import { withStyles } from "@material-ui/styles";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open: true,
    });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showAllColors, classes } = this.props;
    const { format, open } = this.state;

    return (
      <nav className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>Color Picker</Link>
        </div>
        {showAllColors && (
          // {/* Slider */}
          <div className={classes.sliderContainer}>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                min={100}
                max={900}
                step={100}
                defaultValue={level}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={2000}
            message={
              <span id='message-id'>
                Format Changed to {format.toUpperCase()}
              </span>
            }
            ContentProps={{ "aria-labelledby": "message-id" }}
            onClose={this.closeSnackbar}
            action={
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={this.closeSnackbar}>
                <CloseIcon fontSize='small' />
              </IconButton>
            }
          />
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
