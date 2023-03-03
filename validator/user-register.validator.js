const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const checkIfEmailAlreadyExists = async (value) => {
  let result = await User.findOne({ email: value });
  if (result) {
    throw new Error("email already taken");
  }
  return value;
};

const userRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().external(checkIfEmailAlreadyExists),
  password: Joi.string().min(4).max(10).required(),
});

const userRegisterMiddleware = async (req, res, next) => {
  try {
    const { error } = await userRegisterSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    if (error) {
      return next(error);
    }
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  userRegisterMiddleware,
};
