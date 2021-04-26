import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff", padding: 10 }}>
        <h1>I am Home</h1>
        <button onClick={() => alert("you clicked")} style={{ fontSize: 30 }}>
          click
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

// 连接 store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
