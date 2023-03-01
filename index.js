const express = require("express");

// body-parser is used to parse the body of the request
const bodyParser = require("body-parser");
const { errorHandlerMiddleware } = require("./middleware/error-handler.middleware");

// database connection initialization and register model
require("./config/database");

// import route
const routes = require("./routes");

const app = express();
const port = 4000;

// body-parser middleware
app.use(bodyParser.json());

// middleware example
app.use((req, resp, next) => {
  console.log("this is middleware");
  next();
});

// register api routes
app.use("/api", routes);
app.use(errorHandlerMiddleware);

// start express server
app.listen(port, () => {
  console.log("Application is running on port: ", port);
});
