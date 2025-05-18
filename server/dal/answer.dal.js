const Answer = require("../models/Answer");

async function createAnswer(answer) {
    const newAnswer = new Answer(answer);
    return await newAnswer.save();
};

module.exports = {
    createAnswer,
};