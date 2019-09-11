var userController = require('../controllers/user.controller');

module.exports = (app) =>{
    app.post('/user', userController.create);
    app.get('/user', userController.findAll);
    app.post('/userbyid', userController.findById);
    app.post('/updateUser',userController.updateUser);
    
}

