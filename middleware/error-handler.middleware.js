const errorHandlerMiddleware = (err, req, res, next) => {
  let formattedError = {};
  if (err.isJoi) {
    for (const validationErr of err.details) {
      formattedError[validationErr.context.label] = validationErr.message;
    }
  } else {
    formattedError = err;
  }
  res.status(422).json(formattedError);
};

module.exports = {
  errorHandlerMiddleware,
};
