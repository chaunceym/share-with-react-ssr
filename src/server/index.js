import express from "express";
import React from "react";
import { render } from "./utils";
import { matchRoutes } from "react-router-config";
import Routes from "../Routes";
import store from "../store";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const serverStore = store();
  const matchedRoutes = matchRoutes(Routes, req.path); // 匹配当前路径
  const promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(serverStore));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(req, serverStore, Routes));
  });
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});

