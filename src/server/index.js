import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
       <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <h1>React SSR 分享会</h1>
      </body>
    </html>
  `);
});

app.listen(3001, function () {
  console.log("server is running on 3001");
});

