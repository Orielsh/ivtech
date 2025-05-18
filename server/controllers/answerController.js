const answerService = require("../services/answerService");

const createAnswer = async (req, res) => {
    try {
        const { id } = req.params;
        const newAnswer = await answerService.createAnswer({...req.synthBody, questionId: id, userId: req.user.id});
        return res.status(200).json({
            success: true,
            data: newAnswer,
        });
    }
    catch (err) {
        // return an error message
        return res.status(err.status || 500).json({
            success: false,
            message: err.message ?? "Conuldn't create answer",
        });
    }
};

module.exports = {
    createAnswer
}