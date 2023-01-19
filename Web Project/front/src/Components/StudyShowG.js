import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

export default class StudyShowG extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entirearray: this.props.entirearray,
    };

    this.handleButton = () => {
      this.props.onDelete(this.props.id);
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <a href="/group" style={{ textDecoration: "none", color: "black" }}>
            <ListItem>
              <ListItemText primary={this.props.studyname} />
            </ListItem>
          </a>
          <IconButton onClick={this.handleButton}>
            <RemoveIcon style={{ color: "#5c52a6" }} />
          </IconButton>
        </div>
        <Divider />
      </div>
    );
  }
}
