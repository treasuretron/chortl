var express = require('express');
var app = express();
var handlers = require('./handlers');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public')); // serve resources in public folder
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies

app.post('/household', handlers.newHousehold);

app.post('/sendEmail', handlers.sendEmail);

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('Listening on port %d', this.address().port);
});