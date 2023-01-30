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
  users.push(user);
  resp.status(201).json(user);
});

app.get('/user', (req, resp) => {
    resp.json(users);
})

// {
//     fullName: 'john',
//     email: '',
//     password: '',
//     address: '',
//     phone: ''

// }

app.listen(port, () => {
  console.log("Application is running on port: ", port);
});
