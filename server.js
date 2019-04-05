const express = require("express");
const compression = require("compression");
const next = require("next");
const axios = require("axios");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const sm = require("sitemap");
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

  server.get("/sitemap.xml", function(req, res) {
    let urls = [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/vendor-login", changefreq: "monthly", priority: 0.3 }
    ];
    const response = res;
    let categories;
    //pull profile etc for sitemap
    axios.defaults.baseURL = "https://celebraton-server.herokuapp.com";
    // axios.defaults.baseURL = "http://localhost:5000";
    axios
      .get(`/api/profiles/allProfiles`)
      .then(profiles => {
        profiles.data.map(profile =>
          urls.push({ url: `/profile/${profile.slug}` })
        );
      })
      .then(
        axios.get(`/api/categories/allCategories/50/0`).then(categories => {
          categories = categories.data;
          axios
            .get(`/api/admin/getLocations`)
            .then(locations => {
              const loc = locations.data[0].locations;
              loc.map(location => {
                categories.map(category =>
                  urls.push({ url: `/${category.slug}_in_${location}` })
                );
              });
            })
            .then(res => {
              //Create instance of sitemap
              const sitemap = sm.createSitemap({
                hostname: "https://www.celebraton.in",
                cacheTime: 600000, // 600 sec - cache purge period
                urls: urls
              });
              sitemap.toXML(function(err, xml) {
                if (err) {
                  console.log(err);
                }
                response.header("Content-Type", "application/xml");
                response.send(xml);
              });
            });
        })
      );
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

  server.get("/dialogflow", (req, res, next) => {
    // this.unblock();
    // var obj=JSON.stringify(req);
    // console.log(EJSON.fromJSONValue(req.queryResult),EJSON.stringify(req.queryResult));
    // var obj=EJSON.fromJSONValue(req);
    // var obj2=EJSON.stringify(req);
    // console.log(obj.queryResult);
    var elasticemail = require("elasticemail");
    var client = elasticemail.createClient({
      username: "admin@celebraton.in",
      apiKey: "4110245d-e1d2-4944-ac43-52bd0d720c2b"
    });

    var msg = {
      from: "admin@celebraton.in",
      from_name: "CelebratON.in",
      to: "admin@celebraton.in",
      subject: "New Enquiry/contact form from the Bot",
      body_html: "Check in dialogflow history"
    };

    client.mailer.send(msg, function(err, result) {
      if (err) {
        return console.error(err);
      }
    });
    return {
      fulfillmentText:
        "Thanks a lot. You will receive a call from our representative soon. \nHappy Celebrating !!"
    };
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
