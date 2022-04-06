var playLikstService = require('../../businness/services/playListService.js')
var utilities = require('../../businness/utilities/responseManaging')

exports.addVideoToPlayList = function(req,resp){
    playLikstService.addVideoToPlayList(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}
exports.addVideoToPlayListById = function(req,resp){
    playLikstService.addVideoToPlayListById(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}

exports.createNewPlayList = function(req,resp){
    //console.log(req.params.name);
    playLikstService.createNewPlayList(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
       // console.log(" check to json "+utilities.formatResponse(null, data));
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}

exports.changeEntitled = function(req,resp){
    playLikstService.changeEntitled(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}
exports.removeVideoFromPlayList = function(req,resp){
    playLikstService.removeVideoFromPlayList(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}
exports.searchPlayList = function(req,resp){
    playLikstService.searchPlayList(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}


exports.getUserPLayLists = function(req,resp){
    playLikstService.getUserPLayLists(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}

exports.changeVideoRank = function(req,resp){
    playLikstService.changeVideoRank(req).then( (data) =>{
        resp.header("Access-Control-Allow-Origin", "*");
        resp.json(utilities.formatResponse(null, data));
    }).catch( (error) =>{
        resp.json(utilities.formatResponse(error, null));
    });
}

