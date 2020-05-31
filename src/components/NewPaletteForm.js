import React, { Component } from "react";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
// Material-ui
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";

// https://github.com/clauderic/react-sortable-hoc
import arrayMove from "array-move";

const drawerWidth = 350;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      width: "47%",
      whiteSpace: "nowrap",
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});
// --------------------------------------------------------------
class NewPaletteForm extends Component {
  static defaultProps = { maxColors: 20 };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: this.props.palettes[0].colors,
    };
    this.addNewColors = this.addNewColors.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addrandomColor = this.addrandomColor.bind(this);
  }
  clearPalette() {
    this.setState({ colors: [] });
  }

  addrandomColor() {
    const allColors = this.props.palettes
      .map((palette) => palette.colors)
      .flat();
    const filteredArr = allColors.filter(
      (color) => !this.state.colors.includes(color)
    );
    const randomColor =
      filteredArr[Math.floor(Math.random() * filteredArr.length)];
    this.setState({
      colors: [...this.state.colors, randomColor],
    });
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  addNewColors(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, currentColor, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleDrawerOpen={this.handleDrawerOpen}
          handleSubmit={this.handleSubmit}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {/* Content goes here */}
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={this.clearPalette}>
                Clear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                style={{
                  backgroundColor: paletteIsFull ? "grey" : currentColor,
                }}
                disabled={paletteIsFull}
                onClick={this.addrandomColor}>
                {paletteIsFull ? "Palette full" : "Random Color"}
              </Button>
            </div>
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColors}
              colors={colors}
            />
          </div>
        </Drawer>
        {/* outside of the drawer */}
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}>
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
