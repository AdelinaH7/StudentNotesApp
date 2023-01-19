import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SettingsIcon from "@material-ui/icons/Settings";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = () => {
      localStorage.removeItem("id");
    };
  }
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ backgroundColor: "#5c52a6", color: "black" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              style={{
                marginLeft: "20px",
                fontWeight: "bold",
                marginTop: "10px",
                fontSize: "30px",
              }}
            >
              <a
                href="/main"
                style={{ textDecoration: "none", color: "black" }}
              >
                Student Notes
              </a>
            </Typography>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <IconButton edge="start" color="inherit" href="/main">
                <HomeIcon
                  style={{ width: "30px", height: "30px", color: "black" }}
                />
              </IconButton>
              <IconButton href="/note" style={{ marginLeft: "5px" }}>
                <PostAddIcon
                  style={{ width: "30px", height: "30px", color: "black" }}
                />
              </IconButton>
              <IconButton href="/manage" style={{ marginLeft: "5px" }}>
                <SettingsIcon
                  style={{ width: "30px", height: "30px", color: "black" }}
                />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                href="/"
                style={{ marginLeft: "5px" }}
                onClick={this.handleLogOut}
              >
                <ExitToAppIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "black",
                  }}
                />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
