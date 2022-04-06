var express = require('express');
port = process.env.PORT || 1852,
  bodyParser = require('body-parser');
 cors = require('cors');
  app = express(),
   path = require('path');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'vidzPlayList')));
//app.use(cors({ origin: '*' }));

var routes = require('./controllers/routes/vidzplaylistRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
