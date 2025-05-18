const router = require('express').Router();
const questionController = require("../controllers/questionController");
const answerController = require("../controllers/answerController");
const auth = require("../middlewares/auth");
const validateScheme = require('../middlewares/JOIValidator');
const { questionSchema } = require("../schemas/questionSchema");
const { answerSchema } = require("../schemas/answerSchema");

//  base path = "/api/question"
router.get("/", questionController.getAllQuestions);
router.get("/:id", questionController.getQuestionById);
router.post("/:id/answers", auth.isLoggedIn, validateScheme(answerSchema.create), answerController.createAnswer);
router.post("/",auth.isLoggedIn,validateScheme(questionSchema.create), questionController.createQuestion)

module.exports = router;