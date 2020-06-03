import React, { Component } from "react";
// Material-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// react form validator
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// https://github.com/missive/emoji-mart
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stage: "form", newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.showImojiPicker = this.showImojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaleteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  savePalette(emoji) {
    const newPallete = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPallete);
    this.setState({ stage: "" });
  }
  showImojiPicker() {
    this.setState({ stage: "emoji" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.heidForm();
  };

  render() {
    const { newPaletteName, stage } = this.state;
    const { heidForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={this.handleClose}>
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Emoji
          </DialogTitle>
          <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showImojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name to your new beautiful palette
              </DialogContentText>
              <TextValidator
                label='Palete Name'
                name='newPaletteName'
                fullWidth
                margin='normal'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaleteNameUnique"]}
                errorMessages={[
                  "Enter a palette name",
                  "palette name must be unique",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={heidForm} variant='contained' color='secondary'>
                Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
