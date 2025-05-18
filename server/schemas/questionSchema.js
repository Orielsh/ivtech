const Joi = require('joi');

const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
};


const questionSchema = {
    create: Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).min(1).required(),
        userId: Joi.string().required(),
    }).options(validationOptions).required(),
}

module.exports = { questionSchema };