const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "sreehari" });
});

app.get("/params/:id", (req, res) => {
  const params = req.params;

  //http://localhost:5000/params/5
  console.log(params); //{id": "5"}

  res.status(200).json({ success: true, data: { params } });
});

app.get("/query", (req, res) => {
  const query = req.query;

  //http://localhost:5000/query?name=sreehari&id=3
  console.log(query); //{name:"sreehari",id=4}

  res.status(200).json({ success: true, data: { query } });
});

app.listen(5000, () => console.log("Server connected : 5000"));
