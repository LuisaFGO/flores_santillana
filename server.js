const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static("./dist/flores_santillana"));

// app.get("/*", (req, res) =>
//   res.sendFile("index.html", { root: "dist/flores_santillana" })
// );
app.post("/send_email");

app.use(express.static(path.join(__dirname, "dist/flores_santillana")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/flores_santillana/index.html"));
});

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.listen(process.env.PORT || 8080);
