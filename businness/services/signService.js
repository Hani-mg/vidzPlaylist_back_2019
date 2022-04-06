var user = require('../models/userModel')

exports.signIn = function (req) {
    return new Promise((resolve, reject) => {
    user.findUser(req).then( (data)  => {
        console.log("find user"+data);
        resolve( { name: data.name, firstname:data.firstname, email:data.email } );
    }).catch( (error)  => {
        reject(error);
    });
});
}

exports.signUp = function (req) {
    return new Promise((resolve, reject) => {
    user.saveUser(req).then( (data)  => {
        console.log("save user"+data);
        
    resolve ({ name: data.name, firstname:data.firstname, email:data.email });
    }).catch( (error)  => {
        reject(error);
    });
});
}
