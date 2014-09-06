var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB connected!");
});


var householdSchema = new Schema({
  admin: String,
  name:  String,
  occupants: [{ name: String, email: String, karma: Number }],
  chores: [{ name: String}],
});

var household = mongoose.model('household', householdSchema);
