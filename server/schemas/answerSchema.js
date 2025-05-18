const Joi = require('joi');

const validationOptions = {
    stripUnknown: true,
    abortEarly: false,
};


const answerSchema = {
    create: Joi.object().keys({
        body: Joi.string().required(),
    }).options(validationOptions).required(),
}

module.exports = { answerSchema };