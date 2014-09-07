var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("DB connected!");
});


var householdSchema = new Schema({
  name:  String,
  occupants: [housemateSchema],
  chores: [choreTypeSchema],
  // day: Number,
  // week: Number
});
var Household = mongoose.model('Household', householdSchema);

var housemateSchema = new Schema( {
  name: String, 
  email: String
});
var Housemate = mongoose.model('Housemate', housemateSchema);

var choreTypeSchema = new Schema({
  name: String,
  description: String
});
var ChoreType = mongoose.model('ChoreType', choreTypeSchema);

var choreSchema = new Schema ({
  housemate : [housemateSchema],
  chore : [choreTypeSchema],
  date : Date,
  karma : Number,
  house : [householdSchema]
});
var Chore = mongoose.model('Chore', choreSchema);

// add a new household, the occupants, and relevant chores
exports.newHousehold = function (req, res){
  
  var data = req.body;

  // TODO: make sure house name is unique!

  // add household
  var newHouse = new Household({
      name:  data.name,
  });

  // add chores
  for(var i = 0; i < data.chores.length; i++){
    newHouse.chores.push({
      name: data.chores[i].name,
      description: data.chores[i].email
    });
  }


  // add housemates
  for(var i = 0; i < data.housemates.length; i++){
    newHouse.occupants.push({
      name: data.housemates[i].name,
      email: data.housemates[i].email
    });
  }

  // save new household
  newHouse.save(function (err) {
    if (err) return handleError(err);
    console.log('Success!');
    res.send(); // send response
  });
  
};

// return household info (people, chores, name...)
exports.getHousehold = function (req, res){
  // fetch data based on id provided

  //return the data
};

exports.sendEmail = function (req, res){
  console.log("the EMAIL!: ");
  res.send("message ???");
};
