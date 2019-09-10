var mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name:{
        type: String
    },
    mobile: {
        type: Number
    }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;