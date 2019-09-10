const User = require('../models/user.model');

exports.create = (req,res)=>{
    if(req.body.name && req.body.mobile){
        const user = new User({
            name: req.body.name,
            mobile: req.body.mobile
        })
        const userData = {
            name: req.body.name,
            mobile: req.body.mobile
        }

        // it also works
        // User.create(userData, function (err, user) {
        //     if (err) {
        //         return res.send({
        //             message: 'db err',
        //             responseCode: '700',
        //             status: 200,
        //             error: err
        //         });
        //     } else {
                
        //         return res.send({
        //             message: 'user created',
        //             responseCode: 200,
        //             status: 200,
        //             user: user
        //         });
        //     }
        // });
        user.save().then(data=>{
            return res.status(200).send({message: data});
        }).catch(err=>{
            return res.send({error: err});
        })
    }else{
        return res.send({
            message: 'all field required'
        })
    }
}