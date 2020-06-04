import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";
// Material-ui
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
// https://reactcommunity.org/react-transition-group/
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = { openDeleteDialog: false, deletingId: "" };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Color</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                <MiniPalette
                  key={palette.id}
                  id={palette.id}
                  // handleDelete={deletePalette}
                  openDialog={this.openDialog}
                  {...palette}
                  goToPalette={this.goToPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby='Delete-dialog-title'
          onClose={this.closeDialog}>
          <DialogTitle id='Delete-dialog-title'>
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[900] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[900] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancle</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
