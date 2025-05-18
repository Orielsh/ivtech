const answerDal = require('../dal/answer.dal');
const questionDal = require("../dal/question.dal");
const userDal = require("../dal/user.dal");
async function createAnswer(answer) {
    const newAnswer = await answerDal.createAnswer(answer);
    questionDal.addAnswer(newAnswer);
    userDal.addAnswer(newAnswer);
    return newAnswer;
}

module.exports = {
    createAnswer,
}