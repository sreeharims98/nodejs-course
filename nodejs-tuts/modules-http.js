const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`<h1> Page Not Found ! </h1>`);
  }
});

server.listen(5000);
