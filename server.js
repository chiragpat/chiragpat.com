var express = require('express'),
    http    = require('http'),
    Swarm = require('./apps/Swarm/app.js');

var app = express();


app.use(express.vhost('swarm.*', Swarm.app));
app.use(app.router);

app.get('/', function (req, res) {
  res.end('Hello World from root');
});

var server = http.createServer(app).listen(3000, function () {
  console.log('Express server listening on port ' + 3000);
});

Swarm.socketServer(server);