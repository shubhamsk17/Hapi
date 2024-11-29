const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required()
});

module.exports = userValidationSchema;
