const bcrypt = require('bcrypt');
const { User } = require('../../models');
require('dotenv').config();
const { validateUserExistence } = require('../../helpers/validateUserExistence.helper')


const register = async (req, res) => {
    try {
        // Validar si el usuario ya existe
        await validateUserExistence(req.body.email);

        // Encriptar la contraseña
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        // Crear usuario
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register };