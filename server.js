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
  server.get("/admin/adminDashboard", (req, res) => {
    return handle(req, res);
  });
  server.get("/dashboard", (req, res) => {
    return handle(req, res);
  });
  server.get("/vendor-login", (req, res) => {
    return handle(req, res);
  });
  server.get("/profile/:slug", (req, res) => {
    const actualPage = "/profile";
    const queryParams = { profileId: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  });
  server.get("/:category", (req, res) => {
    if (req.path.includes("in")) {
      const split = req.path.split("_in_");
      const actualPage = "/category";
      const queryParams = { enquiry: split[0].substring(1) + "-" + split[1] };
      app.render(req, res, actualPage, queryParams);
    } else {
      return handle(req, res);
    }
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
