// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<h1>Home page</h1>");
//   res.end();
// });

// server.listen(5000, () => console.log("server in 5000"));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => console.log("Server connected : 5000"));
