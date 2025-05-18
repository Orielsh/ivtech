const authService = require("../services/authService")
const JOIValidationError = require("../errors/JOIValidationError");
const InvalidCredentialsError = require("../errors/InvalidCredentialsError");

const login = async (req, res) => {
  try {
    token = await authService.login(req.synthBody);
    return res.status(200).json({ success: true, token: token });
  } catch (error) {
    if (error instanceof InvalidCredentialsError || error instanceof JOIValidationError)
      return res.status(error.status).json({ success: false, message: `Error loggin-in: ${error.message}` });
    return res.status(500).json({ success: false, message: "Error loggin-in: Should have return error 401 or 400 but something unexpected happened" });
  }
};

module.exports = { login };