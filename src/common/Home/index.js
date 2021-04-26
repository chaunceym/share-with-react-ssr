import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
  componentDidMount() {
    console.log("mount============");
    this.props.getHomeList();
  }

  render() {
    const { list } = this.props;
    console.log("render============");
    console.log(list);
    return (
      <div style={{ backgroundColor: "#000", color: "#fff", padding: 10 }}>
        <h1>I am Home</h1>
        <button onClick={() => alert("you clicked")} style={{ fontSize: 30 }}>
          click
        </button>
        <div>
          {list?.map((item) => (
            <h2 key={item.id}>{item.title}</h2>
          ))}
        </div>
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
