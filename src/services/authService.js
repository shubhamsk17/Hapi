const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const validatePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

const generateJWT = (username) => {
    return jwt.sign({ username }, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = { encryptPassword, validatePassword, generateJWT };
