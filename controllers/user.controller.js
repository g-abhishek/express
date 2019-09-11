const User = require('../models/user.model');

exports.create = (req,res)=>{
    if(req.body.name && req.body.mobile){
        const user = new User({
            name: req.body.name,
            mobile: req.body.mobile
        })
        // const userData = {
        //     name: req.body.name,
        //     mobile: req.body.mobile
        // }

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

exports.findAll = (req, res)=>{
    User.find()
        .then(users=>{
            res.send(users);
        }).catch(err=>{
            res.send(err)
        });
}

exports.findById = (req, res)=>{
    var userId = req.body.userId;
    User.findById(userId).then(user=>{
        if(!user){
            return res.send({
                message: 'user not found'
            })
        }else{
            return res.send({
                message: 'user',
                status: 200,
                user: user
            })
        }
    }).catch(err=>{
        return res.send({
            message: 'Error:',err
        })
    })
}

exports.updateUser = (req, res)=>{
    var name = req.body.name;
    var userId = req.query.userId;
    if(userId && name){
        User.findOneAndUpdate({'_id':userId},{name}, {new:true,useFindAndModify:false}).then(user=>{
            if(!user){
                return res.send({message:'user not found'});
            }else{
                return res.send({user})
            }
        }).catch(err=>{
            return res.send(err);
        })
    }else{
        return res.send({
            message: 'all field required'
        })
    }
}

