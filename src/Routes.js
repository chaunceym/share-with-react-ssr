import React from "react";
import { Route } from "react-router-dom";
import Home from "./common/Home";
import Login from "./common/Login";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData, // 解析路径, 如果有 loadData 就为服务端执行
    key: "home",
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    key: "login",
  },
];
