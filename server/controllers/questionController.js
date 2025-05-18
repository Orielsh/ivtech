const questionService = require("../services/questionService");

const getAllQuestions = async (req, res) => {
    try {
        const allQuestions = await questionService.getAllQuestions();
        return res.status(200).json({
            success: true,
            data: allQuestions,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Failed fetch question list",
        });
    }
};

const createQuestion = async (req, res) => {
    try {
        const newQuestion = await questionService.createQuestion(req.synthBody);
        return res.status(200).json({
            success: true,
            data: newQuestion,
        });
    }
    catch (err) {
        // return an error message
        return res.status(err.status || 500).json({
            success: false,
            message: err.message ?? "Conuldn't create question",
        });
    }
};

const getQuestionById = async (req, res) => {

  const { id } = req.params;

  try {
    const found = await questionService.getQuestionById(id)
    // found
    if (found) {
      // return the user found
      return res.status(200).json({
        success: true,
        data: found,
      });
    }
    // not found
    return res.status(404).json({
      success: false,
      message: `question id '${id}' not found`,
    });
  } catch (err) {
    // return an error message
    return res.status(err.status || 400).json({
      success: false,
      message: "Invalid format for question id",
    });
  }
};

module.exports = {
    getAllQuestions,
    createQuestion,
    getQuestionById,
}