const Joi = require('joi');
const userController = require('../controllers/userController');
const userValidationSchema = require('../validations/userValidation');

const userRoutes = [
    {
        method: 'POST',
        path: '/user',
        handler: userController.createUserHandler,
        options: {
            validate: {
                payload: userValidationSchema
            }
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: userController.loginUserHandler,
        options: {
            validate: {
                payload: Joi.object({
                    username: Joi.string().min(3).required(),
                    password: Joi.string().min(8).required()
                })
            }
        }
    }
];

module.exports = userRoutes;
