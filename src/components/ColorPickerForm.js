import React, { Component } from "react";
import styles from "./styles/ColorPickerFormStyles";
// Material-ui
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// https://casesandberg.github.io/react-color/
// React color picker
import { ChromePicker } from "react-color";
// react form validator
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "#22366e", newColorName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex });
  };
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div className='ColorPickerForm'>
        <ChromePicker
          color={currentColor}
          disableAlpha
          onChange={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            className={classes.colorNameInput}
            onChange={this.handleChange}
            margin='normal'
            placeholder='Enter color name'
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />
          <Button
            type='submit'
            variant='contained'
            disabled={paletteIsFull}
            color='primary'
            className={classes.addColor}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor,
            }}>
            {paletteIsFull ? "Palette full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
