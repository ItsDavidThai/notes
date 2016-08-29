//Mongoose
//---configuration Folder
var Mongoose = require('mongoose')
// setting up mongo connection
mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
//---/configuration Folder

//---Models Folder

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bluebird = require('bluebird');
// schema sets the structure of the model
var userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});
// build a model based of the schema
var User = mongoose.model('User', userSchema);



User.comparePassword = function(candidatePassword, savedPassword, cb) {
  bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
// this adds a pre hook before there is a save event to the mongo user's collection
userSchema.pre('save', function(next){
  var cipher = bluebird.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

module.exports = User;


//---/Models Folder

// Queries
// queries can be done off of the model
User.findOne({username:'value'})
.exec(function(err, user){
  // do something with the user data
})


// instances of models are called documents
var newUser = new User({
  username:'value',
  password:'value'
})
// even though we created an instance we have to find it using the save method
newUser.save(function(err, newUSer){
  //do something with the new user data
})






