const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { User } = require('../../models');
require('dotenv').config();


const login = async ( req, res ) => {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(400).json({ error: 'Usuario o contraseña no validos' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ error: 'Usuario o contraseña no validos' });
    }
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({token})

}

module.exports = {
    login
}