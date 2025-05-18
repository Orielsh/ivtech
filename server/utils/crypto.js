const crypto = require('crypto');

function hashSHA512WithSalt(password, salt) {
    const hmac = crypto.createHmac('sha512', salt);
    hmac.update(password);
    return hmac.digest('hex');
}

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

function compareSHA512(storedPassword, enteredPassword, storedSalt){
    return storedPassword === hashSHA512WithSalt(enteredPassword, storedSalt);
}

module.exports = {hashSHA512WithSalt, generateSalt, compareSHA512};