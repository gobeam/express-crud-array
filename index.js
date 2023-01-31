const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const users = [];
app.use(bodyParser.json());

app.use((req, resp, next) => {
  console.log("this is middleware");
  next();
});

app.post("/user", (req, resp) => {
  const user = req.body;
  let id = users.length + 1;
  user.id = id;
  users.push(user);
  resp.status(201).json(user);
});

app.get("/user", (req, resp) => {
  resp.json(users);
});

app.put("/user/:id", (req, resp) => {
  let id = req.params.id;
  let data = req.body;
  let userIndex = users.findIndex((user, index) => {
    return user.id == id;
  });
  if (userIndex < 0) {
    return resp.status(404).json({
      message: "User not found",
    });
  }
  data.id = +id
  users[userIndex] = data;
  let updatedData = users[userIndex];
  resp.json(updatedData);
});

app.listen(port, () => {
  console.log("Application is running on port: ", port);
});
