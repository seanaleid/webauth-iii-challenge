const jwt = require('jsonwebtoken');
const secret = require('../secret/secret.js');

function generateToken() {
    const payload = {
        username
    };

    const options = {
        expiresIn: '8h',
    };

    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = generateToken;