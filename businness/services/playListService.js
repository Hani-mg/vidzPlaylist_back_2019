var playList = require('../models/playlistModel')



exports.createNewPlayList = function (req) {
   
    return new Promise((resolve, reject) => {
        playList.savePlayList(req).then( (data)  => {
        console.log("save playList"+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}


exports.addVideoToPlayList = function (req) {
    
    return new Promise((resolve, reject) => {
        playList.updateVideoPlayList(req).then( (data)  => {
        console.log("add video to playlist"+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}

exports.addVideoToPlayListById = function (req) {
    var rankVideo=parseInt(req.params.rank,10);
    return new Promise((resolve, reject) => {
        playList.updateVideoPlayListById(req,rankVideo).then( (data)  => {
        console.log("add video to playlist"+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}


exports.changeVideoRank = function (req) {
    
    var min=0;
    var max=0;
    var rankVideo=parseInt(req.params.rank,10);
    var valueIncrementationRank=1;
    var newRankVideo=parseInt(req.params.newRank,10)
        if(req.params.rank > req.params.newRank){
            min= parseInt(req.params.newRank,10);
            max= parseInt(req.params.rank,10)-1;
        }
        else{
            min= parseInt(req.params.rank,10)+1;
            max= parseInt(req.params.newRank,10);
            valueIncrementationRank=-1;
        }
console.log(' min '+min+' max '+max+" newRank "+newRankVideo);
    return new Promise((resolve, reject) => {
        
        playList.updateVideoRankOfPlayList(rankVideo,newRankVideo,req,min,max,valueIncrementationRank).then( (data)  => {
        console.log("add video to playlist"+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}


exports.changeEntitled = function (req) {
    
    return new Promise((resolve, reject) => {
        playList.updatePlayList(req).then( (data)  => {
        console.log("change playlist entitled "+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}


exports.removeVideoFromPlayList = function (req) {
    
    return new Promise((resolve, reject) => {
        playList.deleteVideoPlayList(req).then( (data)  => {
        console.log("delete video from playlist"+data);
        
    resolve (data);
    }).catch( (error)  => {
        reject(error);
    });
});
}

exports.searchPlayList = function (req) {
    return new Promise((resolve, reject) => {
        playList.findPlayList(req).then( (data)  => {
        console.log("find user"+data);
        resolve( data );
    }).catch( (error)  => {
        reject(error);
    });
});
}

exports.getUserPLayLists = function (req) {
    return new Promise((resolve, reject) => {
        playList.findUserPlayList(req).then( (data)  => {
        console.log(" PlayList récupéré "+data);
        resolve( data );
    }).catch( (error)  => {
        reject(error);
    });
});
}


