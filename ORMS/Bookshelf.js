//Bookshelf
//---configuration Folder
var bookshelf = require('bookshelf')

// this defines our tables and relationships
knex.schema.createTable('users', function(user){
  user.increments('id').primary();
  user.string('username');
  user.string('password')
})

knex.schema.createTable('urls', function(url){
  url.increments('id').primary();
  url.string('url', 255);
  url.string('base_url', 255);
  url.string('code', 100);
  url.string('title', 255);
  url.integer('visits');
  url.timestamps();
})

db.knex.schema.createTable('clicks', function (click) {
  click.increments('id').primary();
  click.integer('link_id');
  click.timestamps();
})
//---/configuration Folder

//---Collections Folder

var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;

//---/Collections Folder

//---Models Folder
// Models are objects that representing individual database rows
  //User Model
var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  // this runs a creation of an instance
  intialize: function(){
    this.on('creating', someFunction)
  },
  comparePassword: function(){
    // some function the model cause invoke
  },
  someFunction: function(){
    //this gets called on intialize
  }

})
//to perform queries, an instance of the model must be made

var user = new User()


// Queries

new User({username:'value' })
.fetch().then(function(found){
  //do something with the data
})

// create a new link model
var link = new Link({
  url: uri,
  title: title,
  base_url: req.headers.origin
});

// the save method is used to perform an insert or update query

link.save().then(function(newLink) {
  // when you create a new entry
  // add that entry to its collection using add
  Links.add(newLink);
  res.send(200, newLink);
});

// Collection Queries
// Collections is just an array of models, collections have methods that can be used on all models in the array
// grabs all the models in this collection
Links.fetch()
