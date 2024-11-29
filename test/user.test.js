const request = require('supertest');
const { app } = require('../src/server');  // Assuming the app is exported

describe('User API', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/user')
            .send({ username: 'testuser', password: 'password123' });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created successfully');
    });

    it('should login a user and return a token', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: 'testuser', password: 'password123' });
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
    });
});
