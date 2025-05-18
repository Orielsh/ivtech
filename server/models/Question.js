const mongoose = require("mongoose");
const Answer = require("../models/Answer");

const questionSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        tags: {
            type: [String],
            default: undefined,
            validate: {
                validator: function (array) {
                    if (!array) return true; // Allow null or undefined
                    const uniqueTags = [...new Set(array)];
                    return uniqueTags.length === array.length;
                },
                message: 'Tags must be an array of unique strings.',
            },
        },
        answers: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Answer"
                }
            ],
            default: undefined,
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

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;