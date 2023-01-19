import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, ListItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

//Components
import Nav from "./Nav";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            paddingTop: "100px",
            marginTop: "10px",
          }}
        >
          Hello, Student!
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TextField
            id="standard-search"
            label="Search..."
            type="search"
            style={{ width: "400px" }}
          />
          <Button>
            <SearchIcon style={{ width: "40px", height: "40px" }} />
          </Button>
          <Select
            labelId="demo-simple-select-label"
            style={{ width: "275px", marginLeft: "100px" }}
          >
            <MenuItem value="course">Course</MenuItem>
            <MenuItem value="lab">Lab</MenuItem>
            <MenuItem value="practice">Practice</MenuItem>
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "30px",
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
                  primary="First note"
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
                  primary="Second note"
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
                  primary="Third note"
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
      </div>
    );
  }
}
