const Joi = require('joi');

const userRegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(10).required(),
});

const userRegisterMiddleware = (req, res, next) => {
    const { error } = userRegisterSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        return next(error);
    }
    next();
}

module.exports = {
    userRegisterMiddleware
};