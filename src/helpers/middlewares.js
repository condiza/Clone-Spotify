const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();


const checkToken = async ( req, res, next) =>{
    if(!req.headers['autorization']){
        return res.status(403).json({ message: "User no aotorzate"})
    }
    
    const token = req.headers['autorization']
    let payload;

    try {
        payload = jwt.verify( token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(403).json({ message: "User no aotorzate"})
    }

    const user = await User.findByPk(payload.id);

    req.user = user;

    next();
}

module.exports = {
    checkToken
}