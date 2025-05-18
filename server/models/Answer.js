const mongoose = require("mongoose");
const Question = require("../models/Question");
const User = require("../models/User");

const AnswerSchema = new mongoose.Schema(
    {
        body: String,
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;