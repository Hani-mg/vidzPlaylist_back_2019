module.exports = function (app) {
    var signController = require('../api/signController');
        playListController = require('../api/playListController');
  
      
   app.route('/').get(function(req, res) {
    res.sendFile( path.join(__dirname, 'vidzPlayList/index.html'))
  });
 
 
    app.route('/signUp/:name/:firstname/:email/:password')
      .get(signController.signUp);
  
    app.route('/signIn/:email/:password')
      .get(signController.signIn);
  
    app.route('/createNewPlayList/:entitled/:email')
      .get(playListController.createNewPlayList);
    
      app.route('/addVideo/:entitled')
      .get(playListController.addVideoToPlayList);
  
      app.route('/addVideoById/:id/:title/:artist/:duration/:rank/:source')
      .get(playListController.addVideoToPlayListById);
  
      app.route('/changeRank/:idplayList/:rank/:newRank/:videosource')
      .get(playListController.changeVideoRank);
  
      app.route('/changeEntitled/:oldentitled/:newentitled')
      .get(playListController.changeEntitled);
  
      app.route('/removeVideoFromPlayList/:entitled/:videoSource')
      .get(playListController.removeVideoFromPlayList);
  
      app.route('/searchPlayList/:searchedWordEntitled')
      .get(playListController.removeVideoFromPlayList);
  
      app.route('/myPlayList/:email')
      .get(playListController.getUserPLayLists);
  
    app.route('/test/:arg')
      .get(function(req, res){
        res.send('TEst DONE'+req.params.arg);
      });

    app.use(function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.status(404).send({ url: req.originalUrl + ' not found' });
    });
  
  };
  