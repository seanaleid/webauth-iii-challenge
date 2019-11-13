const jwt = require('jsonwebtoken');
const secret = require('../secret/secret.js');

function generateToken(username) {
    const payload = {
        username
    };

    const secret = process.env.JWT_SECRET || "is this a secret?";

    const options = {
        expiresIn: '8h',
    };

    return jwt.sign(payload, secret, options);
}

module.exports = generateToken;