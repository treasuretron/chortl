var express = require('express');
var app = express();
var handlers = require('./handlers');


// serve resources in public folder
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   })


app.listen(3000, function() {
    console.log('Listening on port %d', this.address().port);
});