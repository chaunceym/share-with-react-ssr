import Routes from "../Routes";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";

export const render = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>{Routes}</StaticRouter>
  );

  return `
       <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR 分享会</h1>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
