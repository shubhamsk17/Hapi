module.exports = {
    jwtSecret: 'your_jwt_secret',  // Should be stored securely (e.g., environment variable)
    db: {
        dialect: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '',
        database: 'hapi_db'
    }
};
