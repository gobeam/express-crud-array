const users = require("../model/user");

const store = (req, resp) => {
  const user = req.body;
  let id = users.length + 1;
  user.id = id;
  users.push(user);
  resp.status(201).json(user);
};

const get = (req, resp) => {
  resp.json(users);
};

const update = (req, resp) => {
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
  data.id = +id;
  users[userIndex] = data;
  let updatedData = users[userIndex];
  resp.json(updatedData);
};

const destroy = (req, resp) => {
  let id = req.params.id;
  let userIndex = users.findIndex((user, index) => {
    return user.id == id;
  });
  if (userIndex < 0) {
    return resp.status(404).json({
      message: "User not found",
    });
  }
  users.splice(userIndex, 1);
  resp.status(204).json({
    message: "User deleted successfully",
  });
};

module.exports = {
  store,
  get,
  update,
  destroy,
};
