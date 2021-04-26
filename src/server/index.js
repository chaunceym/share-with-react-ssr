import express from "express";
import Home from "./../common/Home";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(`
       <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR 分享会</h1>
        <div id="root">${content}</div>
      </body>
    </html>
  `);
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});
