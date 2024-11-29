const User = require('../models/userModel');
const { encryptPassword, validatePassword, generateJWT } = require('../services/authService');

const createUserHandler = async (request, h) => {
    const { username, password } = request.payload;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        return h.response({ message: 'Username already taken' }).code(400);
    }

    // Encrypt password and create user
    const hashedPassword = await encryptPassword(password);
    const user = await User.create({ username, password: hashedPassword });

    return h.response({ message: 'User created successfully' }).code(201);
};

const loginUserHandler = async (request, h) => {
    const { username, password } = request.payload;

    const user = await User.findOne({ where: { username } });
    if (!user || !(await validatePassword(password, user.password))) {
        return h.response({ message: 'Invalid credentials' }).code(401);
    }

    const token = generateJWT(user.username);
    return { token };
};

module.exports = { createUserHandler, loginUserHandler };
