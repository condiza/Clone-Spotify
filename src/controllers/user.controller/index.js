const registerController = require('./user.register.controller');
const loginController = require('./user.login.controller');

module.exports = {
  ...registerController,
  ...loginController
};