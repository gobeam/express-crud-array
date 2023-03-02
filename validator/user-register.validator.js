const Joi = require("joi");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const userRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email()
    
    .custom(async (value, helpers) => {
       const emailExists = await checkIfEmailAlreadyExists(value);
       if(emailExists) {
        return helpers.error("Email already exists")
       }
       return value;
    }).required(),
  password: Joi.string().min(4).max(10).required(),
});

const checkIfEmailAlreadyExists = async (email) => {
  let result = await User.findOne({ email: email });
  if (result) {
    return true;
  }
  return false;
};

const userRegisterMiddleware = (req, res, next) => {
  const { error } = userRegisterSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return next(error);
  }
  next();
};

module.exports = {
  userRegisterMiddleware,
};
