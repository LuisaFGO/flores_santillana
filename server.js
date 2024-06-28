const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static("./dist/flores_santillana"));

// app.get("/*", (req, res) =>
//   res.sendFile("index.html", { root: "dist/flores_santillana" })
// );

app.use(express.static(path.join(__dirname, "dist/flores_santillana")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/flores_santillana/index.html"));
});

app.listen(process.env.PORT || 8080);
