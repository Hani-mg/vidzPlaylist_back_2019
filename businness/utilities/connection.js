var mongoClient = require('mongodb'). MongoClient;
//var url = 'mongodb://localhost:27017/playlistproject';
var user = 'itu';
var password = 'itu';
var server = 'cluster0-axtcu.mongodb.net';
//var port = '27017';
var dataBase = 'playlistproject';

var url ='mongodb+srv://'+user+':'+password+'@'+server+'/'+dataBase+'?retryWrites=true';


 const connect = function(){
   return new Promise((resolve, reject) => {
     mongoClient.connect(url, { useNewUrlParser: true }, (err, connection) => {
      if(err) reject(err);
      else resolve(connection);
     })
   });
 }

 module.exports = { connect }
