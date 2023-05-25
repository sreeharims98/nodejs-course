const express = require("express");

const app = express();

//middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  req.log = { method, url, time };
  next();
};

const authorize = (req, res, next) => {
  console.log("authorized");
  next();
};

app.use([logger, authorize]); //will be applied to all api"
// app.use("/api", [logger, authorize]); //will be applied to "/api"

app.get("/", (req, res) => {
  res.json(req.log);
});

app.get("/api", (req, res) => {
  res.json({ url: "api" });
});

//can be assigned here also
// app.get("/", logger, (req, res) => {
//   res.json(res.log);
// });

//add multiple middlewares
// app.get("/", [logger,authorize], (req, res) => {
//   res.json(res.log);
// });

app.listen(5000, () => console.log("Server connected : 5000"));
