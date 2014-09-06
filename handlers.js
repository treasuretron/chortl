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
  occupants: [housemateSchema]
});

var housemateSchema = new Schema( {
  name: String, 
  email: String
})

var householdSchema = new Schema({
  admin: String,
  name:  String,
  occupants: [housemateSchema],
  chores: [choreTypeSchema],
  day: Number,
  week: Number
});

var choreTypeSchema = new Schema({
  name: String,
  description: String
})

var choreSchema = new Schema ({
  housemate : [housemateSchema],
  chore : [choreTypeSchema],
  date : Date,
  karma : Number,
  house : [householdSchema]
})



var household = mongoose.model('household', householdSchema);

exports.sendEmail = function (req, res){
  console.log("the EMAIL!: ");
  res.send("message ???");
};
