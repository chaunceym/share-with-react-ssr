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
    // 解决报错
    // const list = [
    //   {
    //     id: 1,
    //     title: "1111111",
    //   },
    //   {
    //     id: 2,
    //     title: "2222222",
    //   },
    //   {
    //     id: 3,
    //     title: "3333333",
    //   },
    //   {
    //     id: 4,
    //     title: "4444444",
    //   },
    // ];
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
const withLoadDataHome = connect(mapStateToProps, mapDispatchToProps)(Home);

withLoadDataHome.loadData = (store) => {
  return store.dispatch(getHomeList());
};

export default withLoadDataHome;
