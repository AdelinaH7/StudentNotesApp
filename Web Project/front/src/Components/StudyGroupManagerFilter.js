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
import StudyShowG from "./StudyShowG";
import { post, deleteStuff } from "../Axios";

export default class StudyGroupManagerFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openFilterDialog: false,
      studyGroup: {
        gname: "",
        description: "",
        id: 0,
      },
      studyGroupArray: [],
      founderId: localStorage.getItem("id"),
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let newGroup = this.state.studyGroup;
    newGroup[event.target.name] = event.target.value;
    this.setState({
      studyGroup: newGroup,
    });
  }

  handleDelete = async (itemId) => {
    let res = await deleteStuff(
      "http://localhost:8080/api/group/" + this.state.studyGroup.id,
      this.state.studyGroup.id
    );
    if (res.ok) {
      alert(res.data.msg);
    } else {
      alert(res.data.msg);
    }
    const groups = this.state.studyGroupArray.filter(
      (ceva) => ceva.id !== itemId
    );
    this.setState({
      studyGroupArray: groups,
    });
  };

  save = (event) => {
    this.setState({
      openFilterDialog: false,
    });
    this.postStudyGroup();
    this.state.studyGroupArray.push({
      id: this.state.studyGroup.id,
      gname: this.state.studyGroup.gname,
      description: this.state.studyGroup.description,
    });
  };

  postStudyGroup = async () => {
    let newStudyGroup = {
      gname: this.state.studyGroup.gname,
      description: this.state.studyGroup.description,
      founderId: this.state.founderId,
    };
    let res = await post("http://localhost:8080/api/group/", newStudyGroup);
    this.setState({
      studyGroup: { id: res.data.id },
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
        <h3 style={{ fontSize: "30px" }}>Study groups</h3>
        <IconButton
          onClick={this.handleClickOpen}
          style={{ width: "50px", height: "50px" }}
        >
          <AddCircleOutlineIcon
            style={{ width: "50px", height: "50px", color: "#5c52a6" }}
          />
        </IconButton>
        <div>
          <List style={{ width: "350px" }}>
            {this.state.studyGroupArray.map((item) => (
              <StudyShowG
                key={item.id}
                id={item.id}
                studyname={item.gname}
                entirearray={this.state.studyGroupArray}
                onDelete={this.handleDelete}
              />
            ))}
          </List>
        </div>
        <Dialog open={this.state.openFilterDialog} onClose={this.handleClose}>
          <DialogTitle>Share the note with your study groups</DialogTitle>
          <DialogContent>
            <FormControl component="fieldset">
              <FormGroup>
                <div className="add_study_group">
                  <div className="add_study_group_name">
                    <TextField
                      className="study_group_name"
                      label="Study Group Name"
                      name="gname"
                      onChange={this.handleChange}
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="add_study_group_description">
                    <TextField
                      className="study_group_description"
                      label="Study Group Description"
                      name="description"
                      onChange={this.handleChange}
                      style={{ width: "300px" }}
                    />
                  </div>
                </div>
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
