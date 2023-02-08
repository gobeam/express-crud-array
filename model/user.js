const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = mongoose.model("User", UserSchema);
