import React, { Component } from "react";
import "./App.css";
import { post } from "./Axios";
import { setId } from "./Utils";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
    };
  }

  loginUser = async () => {
    let res = await post(
      "http://localhost:8080/api/welcome/login",
      this.state.user
    );
    if (res.ok) {
      setId(res.id);
      localStorage.setItem("id", res.id);
      this.props.history.push({
        pathname: "/main",
      });
    } else {
      alert(res.message);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    let newUser = this.state.user;
    newUser[e.target.name] = e.target.value;
    this.setState({ User: newUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.loginUser();
  };

  componentDidMount = () => {
    let id = localStorage.getItem("id");
    console.log(id);
    if (id) {
      setId(id);
      this.props.history.push({
        pathname: "/main",
      });
    }
  };

  render() {
    return (
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#5c52a6" }}
      >
        <div className="formbox">
          <h1>Student Notes Login</h1>
          <div className="inputbox">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="inputbox">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <a href="/main">
            <input
              className="btn"
              type="button"
              value="Sign In"
              onClick={this.handleSubmit}
            />
          </a>
          <a href="/register">
            <input className="btn" type="button" value="Register" />
          </a>
        </div>
      </div>
    );
  }
}
