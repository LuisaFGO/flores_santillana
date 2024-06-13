const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist/nombre-de-tu-app"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/nombre-de-tu-app/" })
);

app.listen(process.env.PORT || 8080);
