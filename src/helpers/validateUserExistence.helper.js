const { User } = require('../models');

const validateUserExistence = async (email) => {
    const user = await User.findOne({ email });
    if (user) {
        throw new Error('User already exists');
    }
};

module.exports = {
    validateUserExistence
};