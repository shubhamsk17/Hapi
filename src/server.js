const Hapi = require('@hapi/hapi');
const userRoutes = require('./routes/userRoutes');
const config = require('../../config/config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.db);

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Register routes
    server.route(userRoutes);

    // Sync database
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connected and synced');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
