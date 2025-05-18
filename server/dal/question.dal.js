const Question = require("../models/Question");

async function getAllQuestions() {
    const questions = await Question.find().populate("userId").exec();
    return questions;
};

async function createQuestion(question) {
    const newQuestion = new Question(question);
    return await newQuestion.save();
};

async function getQuestionById(id) {
    const question = await Question.findById(id).populate("answers userId").populate({
        path: "answers",
        populate:{
            path: "userId",
            model: "User",
        }
    }).exec();
    return question;
};

async function addAnswer(answer) {
    const question = await Question.findByIdAndUpdate(
        answer.questionId,
        { $push: { answers: answer.id } },
        { new: true } // To return the updated document
    );
}

module.exports = {
    getAllQuestions,
    createQuestion,
    getQuestionById,
    addAnswer,
};