import React, { Component } from "react";
import MDEditor from "@uiw/react-md-editor";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import { post } from "./Axios";

//Components
import Nav from "./Nav";
import NoteFilter from "./Components/NoteFilter";
import NoteStudyGroup from "./Components/NoteStudyGroup";

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        title: "",
        content: "",
        subject: "",
        id: 0,
      },

      authorId: localStorage.getItem("id"),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newNote = this.state.note;
    newNote[event.target.name] = event.target.value;
    this.setState({
      note: newNote,
    });
  }

  handleMD = (event) => {
    this.setState({
      note: {
        title: this.state.note.title,
        subject: this.state.note.subject,
        content: event,
      },
    });
  };

  handleClick = async (event) => {
    let newNote = {
      title: this.state.note.title,
      content: this.state.note.content,
      subject: this.state.note.subject,
      authorId: localStorage.getItem("id"),
    };
    console.log(newNote);
    let res = await post("http://localhost:8080/api/note/", newNote);
    console.log(res);
    this.setState({
      note: { id: res.data },
    });
    if (res.ok) {
      alert(res.msg);
    } else {
      alert(res.msg);
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="note_info">
            <h3 style={{ fontSize: "30px" }}>Note</h3>
            <TextField
              className="note_text"
              label="Title"
              name="title"
              onChange={this.handleChange}
            />
            <InputLabel style={{ marginTop: "20px" }}>Type</InputLabel>
            <Select
              onChange={this.handleChange}
              name="subject"
              value={this.state.note.subject || ""}
              style={{ width: "275px" }}
            >
              <MenuItem value="Course">Course</MenuItem>
              <MenuItem value="Lab">Lab</MenuItem>
              <MenuItem value="Practice">Practice</MenuItem>
            </Select>
          </div>
          <NoteFilter />
          <NoteStudyGroup />
        </div>
        <div className="note">
          <h3 style={{ fontSize: "20px" }}>
            In case you don't know markdown syntax{" "}
            <a
              href="https://www.markdownguide.org/cheat-sheet/"
              style={{
                color: "#5c52a6",
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              here
            </a>{" "}
            is a quick guide.
          </h3>
          <MDEditor value="" name="content" onChange={this.handleMD} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={this.handleClick}
            style={{
              marginBottom: "100px",
              backgroundColor: "#5c52a6",
              fontWeight: "bold",
              color: "#FFFFFF",
              width: "150px",
              fontSize: "20px",
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}
