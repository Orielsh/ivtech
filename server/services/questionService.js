const questionDal = require('../dal/question.dal');

async function getAllQuestions() {
    return await questionDal.getAllQuestions();
}

async function createQuestion(question) {
    return await questionDal.createQuestion(question);
}

// Service function to get a question by ID
async function getQuestionById(id) {
    return await questionDal.getQuestionById(id);
}
module.exports = {
    getAllQuestions,
    createQuestion,
    getQuestionById
}