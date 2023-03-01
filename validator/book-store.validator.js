const Joi = require("joi");

const bookSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  totalPages: Joi.number().required(),
  price: Joi.number().required(),
});

const bookValidator = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  console.log(
    "🚀 ~ file: book-store.validator.js:13 ~ bookValidator ~ error:",
    error
  );
  if (error) {
    throw new Error(error);
  }
  next();
};

module.exports = {
  bookValidator,
};
