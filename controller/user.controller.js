const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

// store user
const storeUser = async (req, resp) => {
  const data = req.body;
  let user = new UserModel();
  user.firstName = data.firstName;
  user.lastName = data.lastName;
  user.email = data.email;
  user.address = data.address;
  user.phone = data.phone;
  user.password = data.password;
  await user.save();
  resp.status(201).json(user);
};

// get all user
const getAllUser = async (req, resp) => {
  const users = await UserModel.find();
  resp.status(200).json(users);
};

const updateUser = async (req, resp) => {
  const data = req.body;
  const id = req.params.id;
  const result = await UserModel.findOneAndUpdate({ _id: id }, data);
  resp.status(200).json(result);
};

const destroyUser = async (req, resp) => {
  const id = req.params.id;
  await UserModel.findByIdAndDelete(id);
  resp.status(204).json();
};

const getUserById = async (req, resp) => {
  const id = req.params.id;
  const result = await UserModel.findById(id);
  resp.status(200).json(result);
}

module.exports = {
  storeUser,
  getAllUser,
  updateUser,
  destroyUser,
  getUserById,
};
