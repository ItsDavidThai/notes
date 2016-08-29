//Sequelize
//---configuration Folder

var Sequelize = require('sequelize')

// this defines our user tables
var User = Sequelize.define('users',{
  username:Sequelize.STRING,
  password:Sequelize.STRING
})

var Url = Sequelize.define('urls',{
  url:Sequelize.STRING,
  base_url: Sequelize.STRING,
  vists:Sequelize.STRING
})

//this defines our relationship
Url.hasMany(User)

//---/configuration Folder

//create queries
User.findOrCreate()