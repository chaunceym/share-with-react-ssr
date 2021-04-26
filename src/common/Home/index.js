import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff",padding:10 }}>
        <h1>I am Home</h1>
        <button onClick={() => alert("you clicked")} style={{ fontSize: 30 }}>
          click
        </button>
      </div>
    );
  }
}
