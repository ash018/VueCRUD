var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
const staticFileMiddleware = express.static('dist');

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

// Support history api 
app.use(history({
  index: '/dist/index.html'
}));
app.get('/edit/:id', function (req, res) {

  // You can retrieve the :id parameter via 'req.params.id'
  res.send('edit'+req.params.id);
});
// 2nd call for redirected requests
app.use(staticFileMiddleware);



var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);