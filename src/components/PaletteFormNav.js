import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";
// Material-ui
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", formShowing: false };
    this.showForm = this.showForm.bind(this);
    this.heidForm = this.heidForm.bind(this);
  }
  showForm() {
    this.setState({ formShowing: true });
  }
  heidForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { classes, open, palettes, handleSubmit } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <AddToPhotosIcon />
            </IconButton>
            <Typography
              className={classes.header}
              variant='h6'
              color='inherit'
              noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtn}>
            <Link to='/' className={classes.buttonSecondery}>
              <Button variant='contained' color='secondary'>
                Go Back
              </Button>
            </Link>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={this.showForm}>
              Save Palette
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            heidForm={this.heidForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
