import React, { Component } from "react";
import Nav from "./Nav";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { ListItem } from "@material-ui/core";

export default class StudyFiles extends Component {
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
      <div>
        <Nav />
        <h3 style={{ fontSize: "35px", textAlign: "center" }}>Study Group</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#5c52a6",
              color: "#FFFFFF",
              fontWeight: "bold",
              width: "200px",
              marginBottom: "30px",
            }}
            onClick={this.handleClickOpen}
          >
            Add user
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List style={{ width: "600px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid black",
                marginBottom: "1px",
              }}
            >
              <ListItem>
                <ListItemText
                  primary="asdasd"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                />
              </ListItem>
              <IconButton
                style={{ borderLeft: "1px solid black", borderRadius: "0" }}
              >
                <DeleteIcon style={{ color: "#5c52a6" }} />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid black",
                marginBottom: "1px",
              }}
            >
              <ListItem>
                <ListItemText
                  primary="asdasd"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                />
              </ListItem>
              <IconButton
                style={{ borderLeft: "1px solid black", borderRadius: "0" }}
              >
                <DeleteIcon style={{ color: "#5c52a6" }} />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid black",
                marginBottom: "1px",
              }}
            >
              <ListItem>
                <ListItemText
                  primary="asdasd"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                />
              </ListItem>
              <IconButton
                style={{ borderLeft: "1px solid black", borderRadius: "0" }}
              >
                <DeleteIcon style={{ color: "#5c52a6" }} />
              </IconButton>
            </div>
          </List>
        </div>
        <Dialog open={this.state.openFilterDialog} onClose={this.handleClose}>
          <DialogTitle>
            Add one user to the study group using the institutional email
          </DialogTitle>
          <DialogContent>
            <FormControl>
              <FormGroup>
                {
                  <div className="add_filter">
                    <TextField
                      className="filter_text"
                      label="Email"
                      style={{ width: "300px" }}
                    />
                  </div>
                }
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
              onClick={this.save}
            >
              Add
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
