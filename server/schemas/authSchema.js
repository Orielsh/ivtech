const Joi = require('joi')

const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
}

const schemas = {
    login:
        Joi.object().keys({
            email: Joi.string().email().pattern(/^\S+@\S+$/, { name: 'email' }).required().messages({ "any.required": "email is required" })
                .messages({
                    'any.required': 'Email is required',
                    'string.pattern.base': 'Invalid email format', // More specific message for pattern failure
                    'string.email': 'Invalid email format', // Redundant if pattern covers all email formats
                }),
            // password rules: at least one upper case letter, at least one lower case letter, at least one number, at least one special characted, at least 7 characters total
            password: Joi.string().required()
                .messages({
                    'any.required': 'Password is required',
                }),
        }).required().options(validationOptions).messages({ 'any.required': 'Must provide a request body' })
};

module.exports = { schemas };