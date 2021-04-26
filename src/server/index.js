import express from "express";
import React from "react";
import { render } from "./utils";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});

