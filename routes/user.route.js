var userController = require('../controllers/user.controller');

module.exports = (app) =>{
    app.get('/', userController.create);
}