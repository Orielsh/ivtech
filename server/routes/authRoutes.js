const router = require('express').Router();
const validateScheme = require('../middlewares/JOIValidator');
const { schemas } = require("../schemas/authSchema");
const authController = require("../controllers/authController");

//  base path = "/api/auth"

router.post('/login', validateScheme(schemas.login), authController.login)

module.exports = router;