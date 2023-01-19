import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { post } from "./Axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        password2: "",
        email: "",
        age: 0,
        csie: "",
        yearCsie: 0,
      },
      helper: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newUser = this.state.user;
    newUser[event.target.name] = event.target.value;
    this.setState({
      user: newUser,
    });
  }

  handleClick = async (event) => {
    let newUser = {
      username: this.state.user.username,
      password: this.state.user.password,
      password2: this.state.user.password2,
      email: this.state.user.email,
      age: this.state.user.age,
      csie: this.state.user.csie,
      yearCsie: this.state.user.yearCsie,
    };
    let res = await post("http://localhost:8080/api/welcome/register", newUser);
    console.log(res);
    if (res.ok) {
      alert(res.msg);
    } else {
      alert(res.msg);
    }
  };

  render() {
    return (
      <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#5c52a6" }}
      >
        <div className="formbox">
          <a href="/">
            <CloseIcon
              style={{
                color: "white",
                float: "right",
                width: "30px",
                height: "30px",
              }}
            />
          </a>
          <h1>Register</h1>
          <div className="inputbox">
            <input
              type="text"
              placeholder="Username"
              name="username"
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

          <div className="inputbox">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              onChange={this.handleChange}
            />
          </div>

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
              type="text"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
            />
          </div>

          <div className="selectbox">
            <select name="csie" onChange={this.handleChange}>
              <option value="default" id="hide">
                Choose your specialization
              </option>
              <option value="Cibernetics">Cibernetics</option>
              <option value="Info">Info</option>
              <option value="Info English">Info English</option>
              <option value="Statistics">Statistics</option>
            </select>
          </div>

          <div className="selectbox">
            <select name="yearCsie" onChange={this.handleChange}>
              <option value="default" id="hide">
                Choose your year
              </option>
              <option value={`${1}`}>1</option>
              <option value={`${2}`}>2</option>
              <option value={`${3}`}>3</option>
            </select>
          </div>

          <input
            className="btn"
            type="button"
            value="Submit"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
