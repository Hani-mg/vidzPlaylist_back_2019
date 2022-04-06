var signservice = require('../../businness/services/signService.js')
var utilities = require('../../businness/utilities/responseManaging')

exports.signIn = function(req,resp){
    signservice.signIn(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}

exports.signUp = function(req,resp){
    //console.log(req.params.name);
    signservice.signUp(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        console.log(" check to json "+utilities.formatResponse(null, data));
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}