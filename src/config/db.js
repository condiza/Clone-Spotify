require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa!!');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};

module.exports = {
    sequelize,
    connectToDB
};
