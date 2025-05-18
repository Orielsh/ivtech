const LoginError = require("../errors/LoginError");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const isLoggedIn = (req, res, next) => {
    try {
        const token = req.header('x-auth-token')
        if (!token) throw new LoginError();
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        return next();
    } catch (err) {
        if (err instanceof LoginError)
            return res.status(err.status).json({ success: false, message: err.message })
        return res.status(500).json({ success: false, message: err.message })
    }
}

const isCurrentUser = (req, res, next) => {
    if (req.params.id === req.user.id)
        return next();
    else
        return res.status(403).json({ success: false, message: "Access denied" })
}

module.exports = {
    isLoggedIn,
    isCurrentUser,
};