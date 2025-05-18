const crypto = require("../utils/crypto");
const InvalidCredentialsError = require("../errors/InvalidCredentialsError");
const jwt = require("jsonwebtoken");
const userDAL = require("../dal/user.dal");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

async function login(credentials) {
    try {
        const user = await userDAL.getUserByEmail(credentials.email);
        if (!user) throw new InvalidCredentialsError();
        const isMatch = crypto.compareSHA512(user.hashedPassword, credentials.password, user.salt);
        if (!isMatch) throw new InvalidCredentialsError();
        const token = jwt.sign({
            id: user._id,
            nickName: user.nickName,
        }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        return token
    } catch (error) {
        throw error
    }
}

module.exports = { login };