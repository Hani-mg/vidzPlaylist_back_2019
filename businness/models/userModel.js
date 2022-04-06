var mongodb = require('../utilities/connection')

exports.saveUser= function(req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB)  =>{
            connectionDB.db("playlistproject").collection("user")
            .insertOne({
                name: req.params.name,
                firstname : req.params.firstname,
                email : req.params.email,
                password : req.params.password
            },function(error, userInserted) {
               if(error){
                connectionDB.close();
                reject(error);
               }
               
               else{
                connectionDB.close();
                resolve(userInserted.ops[0]);
               }
               
            });
        });
    });
}

exports.findUser= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("user")
            .findOne({ email : req.params.email, password: req.params.password}, function (error, userSearched) {
                if(userSearched==null){
                    connectionDB.close();
                    reject({code : '10' , error: 'sign up user', message: 'No user matched'});
                }
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                
                   
                
                connectionDB.close();
                resolve(userSearched);
            });
 
        }).catch( (error)  => {
            reject(error);
        });
    });
}
