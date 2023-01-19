import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import NoteShowG from "./NoteShowG";
import { post, deleteStuff } from "../Axios";

export default class NoteManagerFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openFilterDialog: false,
      filter: {
        name: "",
        id: 0,
      },
      nameArray: [],
      userid: localStorage.getItem("id"),
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

    this.handleChange = (event) => {
      this.setState({
        filter: {
          name: event.target.value,
        },
      });
    };
  }

  handleDelete = async (itemId) => {
    let res = await deleteStuff(
      "http://localhost:8080/api/filter/" + this.state.filter.id,
      this.state.filter.id
    );
    if (res.ok) {
      alert(res.data.msg);
    } else {
      alert(res.data.msg);
    }
    const filters = this.state.nameArray.filter((fn) => fn.id !== itemId);
    this.setState({
      nameArray: filters,
    });
  };

  save = (event) => {
    this.setState({
      openFilterDialog: false,
    });
    this.postFilter();
    this.state.nameArray.push({
      id: this.state.filter.id,
      filter: this.state.filter.name,
    });
  };

  postFilter = async () => {
    let newFilter = {
      filterName: this.state.filter.name,
      userId: this.state.userid,
    };
    let res = await post("http://localhost:8080/api/filter/", newFilter);
    this.setState({
      filter: { id: res.data.id },
    });
    if (res.ok) {
      alert(res.msg);
    } else {
      alert(res.msg);
    }
  };

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
          <span>
            <IconButton
              onClick={this.handleClickOpen}
              style={{ width: "50px", height: "50px" }}
            >
              <AddCircleOutlineIcon
                style={{ width: "50px", height: "50px", color: "#5c52a6" }}
              />
            </IconButton>
          </span>
          <div>
            <List style={{ width: "350px" }}>
              {this.state.nameArray.map((item) => (
                <NoteShowG
                  key={item.id}
                  id={item.id}
                  filtername={item.filter}
                  entirearray={this.state.nameArray}
                  onDelete={this.handleDelete}
                />
              ))}
            </List>
          </div>
        </div>
        <Dialog open={this.state.openFilterDialog} onClose={this.handleClose}>
          <DialogTitle>Create a filter</DialogTitle>
          <DialogContent>
            <FormControl>
              <FormGroup>
                {
                  <div className="add_filter">
                    <TextField
                      className="filter_text"
                      label="Filter Name"
                      onChange={this.handleChange}
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
