const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const port = 3000;

const users = [];
app.use(bodyParser.json());

app.use((req, resp, next) => {
  console.log("this is middleware");
  next();
});

app.use('/', routes)

app.listen(port, () => {
  console.log("Application is running on port: ", port);
});
