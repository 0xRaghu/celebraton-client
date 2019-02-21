const express = require("express");
const compression = require("compression");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

var http = require("http");
setInterval(function() {
  http.get("http://celebraton.herokuapp.com");
  http.get("http://celebraton-server.herokuapp.com");
}, 300000); // every 5 minutes (300000)

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get("*.js", (req, res, next) => {
    req.url = req.url + ".gz";
    res.set("Content-Encoding", "gzip");
    next();
  });

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
