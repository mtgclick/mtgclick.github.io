var http = require('http'),
    jade = require('jade'),
    connect = require('connect');

var port = process.env.port || 8000;

var handler = function(req, res, next) {
  res.writeHead(200, {'content-type' : 'text/html'});
  jade.renderFile('./views/index.jade', function(err, html) { 
    res.end(html);
  });
};

var app = connect()
            .use(connect.static('public'))
            .use(handler);

http.createServer(app).listen(port);
