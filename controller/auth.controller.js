const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("User");
const bcrypt = require("bcrypt");

const getProfile = async (req, res) => {
  const id = req.user.id;
  const user = await UserModel.findById(id);
  res.status(200).json({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    id: user._id,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const token = jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: 3600 }
  );

  return res.status(200).json({
    accessToken: token,
  });
};

module.exports = {
  login,
  getProfile,
};
