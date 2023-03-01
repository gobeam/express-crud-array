const Joi = require("joi");

const bookSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  totalPages: Joi.number().integer().required(),
  price: Joi.number().required(),
});

const bookValidator = (req, res, next) => {
  const { error } = bookSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  }
  next();
};

module.exports = {
  bookValidator,
};
