import Routes from "../Routes";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (req, store, routes) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>
  );

  return `
       <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR 分享会</h1>
        <div id="root">${content}</div> 
        <script>
         window.context = {
           state: ${JSON.stringify(store.getState())}
         }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
