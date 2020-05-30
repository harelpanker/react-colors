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

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaleteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
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
    this.setState({ open: false });
  };

  render() {
    const { newPaletteName, open } = this.state;
    return (
      <div>
        <Button
          variant='outlined'
          color='default'
          onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <ValidatorForm
              onSubmit={() => this.props.handleSubmit(newPaletteName)}>
              <TextValidator
                label='Palete Name'
                name='newPaletteName'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaleteNameUnique"]}
                errorMessages={[
                  "Enter a palette name",
                  "palette name must be unique",
                ]}
              />
              <Button variant='contained' color='secondary' type='submit'>
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color='primary'>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
