const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

// store user
const store = async (req, resp) => {
  const data = req.body;
  let user = new UserModel();
  user.firstName = data.firstName;
  user.lastName = data.lastName;
  user.email = data.email;
  user.address = data.address;
  user.phone = data.phone;
  await user.save();
  resp.status(201).json(user);
};

// get all user
const getAllUser = async (req, resp) => {
  const users = await UserModel.find();
  resp.status(200).json(users);
};

module.exports = {
  store,
  getAllUser,
};
