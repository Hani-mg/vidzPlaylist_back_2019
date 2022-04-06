var mongodb = require('../utilities/connection')
ObjectId = require('mongodb').ObjectID;
//const { MongoClient, ObjectID } = require('mongodb');


exports.savePlayList= function(req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connection)  =>{
            var videos=[];
            if(req.query.videos!=null)
             videos=req.query.videos;
            

            connection.db("playlistproject").collection("playlist")
            .insertOne({
                entitled: req.params.entitled,
                user : { email : req.params.email} ,
                videos : videos
            },function(error, userInserted) {
               if(error){
                connection.close();
                reject(error);
               }
               
               else{
                connection.close();
                resolve(userInserted.ops[0]);
               }
            });
        }).catch( (error)  => {
            connection.close();
            reject(error);
        });
    });
}

exports.findPlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            .findOne({ entitled : {$regex: req.params.searchedWordEntitled}}, function (error, playListSearched) {
                if(playListSearched==null){
                    connectionDB.close();
                    reject({code : '10' , error: 'sign up user', message: 'No Playlist matched'});
                }
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                connectionDB.close();
                resolve(playListSearched);
            });
 
        }).catch( (error)  => {
            connection.close();
            reject(error);
        });
    });
}

exports.updateVideoPlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            .updateOne({ entitled : req.params.entitled}, { $push : { videos: {$each : req.query.videos} }},function (error, updatedPlaylist) {
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                if(updatedPlaylist==null){
                    connectionDB.close();
                    reject(" NO playlist  matched for update");
                }
                   
                
                connectionDB.close();
                resolve(updatedPlaylist);
            });
 
        }).catch( (error)  => {
            connection.close();
            reject(error);
        });
    });
}


exports.updateVideoPlayListById= function (req,rankVideo){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            .updateOne({_id: new ObjectId(req.params.id)}, { $push : { videos: { title: req.params.title, artist:req.params.artist, duration: req.params.artist, duration: req.params.duration,rank: rankVideo, img:req.query.img, source:req.params.source} }},function (error, updatedPlaylist) {
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                if(updatedPlaylist==null){
                    connectionDB.close();
                    reject(" NO playlist  matched for update");
                }
                   
                
                connectionDB.close();
                resolve({ title: req.params.title, artist:req.params.artist, duration: req.params.artist, duration: req.params.duration,rank: req.params.rank, img:req.query.img, source:req.params.source});
            });
 
        }).catch( (error)  => {
           // connectionDB.close();
            reject(error);
        });
    });
}


exports.updateVideoRankOfPlayList= function (rankVideo,newRankVideo,req, min, max,valueIncrementation){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {

            connectionDB.db("playlistproject").collection("playlist")
            .update({_id: new ObjectId(req.params.idplayList)},
            //{ $set: {[`videos.${indexVideo}.rank`]: newRankVideo}},
           
            { $inc: { ['videos.$[elem].rank']: valueIncrementation } },
             
            { arrayFilters:  [  { "elem.rank": { $gte: min, $lte: max }  }   ] ,multi: true},
           
           
            function (error, updatedPlaylist) {
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                if(updatedPlaylist==null){
                    connectionDB.close();
                    reject(" NO playlist  matched for update");
                }
                   
                
                //connectionDB.close();
               // resolve(updatedPlaylist);
            });
            console.log(' Hey '+rankVideo+' '+req.params.videosource+' '+newRankVideo);
           connectionDB.db("playlistproject").collection("playlist")
           .update({_id: new ObjectId(req.params.idplayList)},
           //{ $set: {[`videos.${indexVideo}.rank`]: newRankVideo}  },
           
           { $set: {['videos.$[elem].rank']: newRankVideo}},
           { arrayFilters:  [  { "elem.rank": rankVideo, "elem.source":req.params.videosource  }   ] ,multi: true},
           function (error, updatedPlaylist) {
               if(error){
                   connectionDB.close();
                   reject(error);
               }
                 
               if(updatedPlaylist==null){
                   connectionDB.close();
                   reject(" NO playlist  matched for update");
               }
                  
               
               connectionDB.close();
              resolve(updatedPlaylist);
           });
         
 
        }).catch( (error)  => {
           // connectionDB.close();
            reject(error);
        });
    });
}

exports.updatePlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            ./*updateOne*/findOneAndUpdate({ entitled : req.params.oldentitled}, { $set : { entitled: req.params.newentitled} },function (error, updatedPlaylist) {
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                if(updatedPlaylist==null){
                    connectionDB.close();
                    reject(" NO playlist  matched for update");
                }
                   
                
                connectionDB.close();
                resolve(updatedPlaylist.value);
            });
 
        }).catch( (error)  => {
           // connection.close();
            reject(error);
        });
    });
}

exports.deleteVideoPlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            .findOneAndUpdate({ entitled : req.params.entitled}, { $pull : { videos: req.params.videoSource }},function (error, updatedPlaylist) {
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                  
                if(updatedPlaylist==null){
                    connectionDB.close();
                    reject(" NO playlist  matched for update");
                }
                   
                
                connectionDB.close();
                resolve(updatedPlaylist.value);
            });
 
        }).catch( (error)  => {
            connection.close();
            reject(error);
        });
    });
}

exports.findAllPlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist").find({}).toArray(function(err, playLists) {
           // if (err) throw err;
            if(playListSearched==null){
                connectionDB.close();
                reject({code : '10' , error: 'sign up user', message: 'No Playlist matched'});
            }
            if(error){
                connectionDB.close();
                reject(error);
            }
            connectionDB.close();
            resolve(playLists);
            db.close();
          });
           
 
        }).catch( (error)  => {
            connection.close();
            reject(error);
        });
    });
}

exports.findUserPlayList= function (req){
    return new Promise((resolve, reject) => {
        mongodb.connect().then( (connectionDB) => {
           connectionDB.db("playlistproject").collection("playlist")
            .find({ user : { email : req.params.email} }).toArray(function(error, userPlayList) {
                if(userPlayList==null){
                    connectionDB.close();
                    reject({code : '10' , error: 'Aucun PlayList de l\'utilisateur', message: 'No Playlist matched'});
                }
                if(error){
                    connectionDB.close();
                    reject(error);
                }
                connectionDB.close();
                resolve(userPlayList);
              });
           
 
        }).catch( (error)  => {
           // connectionDB.close();
            reject(error);
        });
    });
}
