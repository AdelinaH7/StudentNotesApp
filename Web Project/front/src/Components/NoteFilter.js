import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";

//Components
import NoteShowG from "./NoteShowG";

export default class NoteFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openFilterDialog: false,
    };

    this.handleClickOpen = () => {
      this.setState({
        openFilterDialog: true,
      });
    };

    this.handleClose = () => {
      this.setState({
        openFilterDialog: false,
      });
    };
  }
  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ fontSize: "30px" }}>Filters</h3>
          <IconButton
            onClick={this.handleClickOpen}
            style={{ width: "50px", height: "50px" }}
          >
            <AddCircleOutlineIcon
              style={{ width: "50px", height: "50px", color: "#5c52a6" }}
            />
          </IconButton>
          <List style={{ width: "350px" }}>
            <NoteShowG />
            <NoteShowG />
            <NoteShowG />
          </List>
        </div>
        <Dialog open={this.state.openFilterDialog} onClose={this.handleClose}>
          <DialogTitle>Add multiple filters to the note</DialogTitle>
          <DialogContent>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="one" style={{ color: "#5c52a6" }} />}
                  label="Filter 1"
                />
                <FormControlLabel
                  control={<Checkbox name="two" style={{ color: "#5c52a6" }} />}
                  label="Filter 2"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="three" style={{ color: "#5c52a6" }} />
                  }
                  label="Filter 3"
                />
              </FormGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5c52a6",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#5c52a6",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
