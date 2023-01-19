import React, { Component } from "react";
import Nav from "./Nav";
import NoteManagerFilter from "./Components/NoteManagerFilter";
import StudyGroupManagerFilter from "./Components/StudyGroupManagerFilter";

export default class Manager extends Component {
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
          <NoteManagerFilter />
          <StudyGroupManagerFilter />
        </div>
      </div>
    );
  }
}
