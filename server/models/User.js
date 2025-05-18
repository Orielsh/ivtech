const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: String,
        nickName: { type: String, unique: true },
        email: { type: String, unique: true, lowercase: true },
        hashedPassword: { type: String, requiure: true },
        salt: { type: String, requiure: true },
        questions: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Question"
                }
            ],
            default: undefined,
        },
        answers: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Answer"
                },
            ],
            default: undefined,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;