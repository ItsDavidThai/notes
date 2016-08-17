////$(function(){}) is a jquery shortcut for document.on('ready')
// wrapping an app within a object
chatBox = {
    // declare props and methods
    server: 127.0.0.1,

    init()=>{
        
    },
    processData: () =>{

    },
    addRooms: () =>{
        
    },
    addMessages: () => {

    },
    sendMessages: () => {

    }
}

// psuedoclassical instantion and subclassing
function Person(name, gender){
    this.name = name;
    this.gender = gender;
}
Person.prototype.sayHello = function(){
   console.log(this.name + ' says hello')
}
function malePerson(name){
    Person.call(this, name, 'male')
}

malePerson.prototype = Object.create(Person.prototype);
malePerson.prototype.constructor = malePerson;

var david = new malePerson('david')

// vanilla node server implementation 
the server routes to the proper request handler and the request handler handles
POST/GET/OPTIONS... requests 
we can use a library to parse the string url to route to the proper handler
the request handle recieves a request agrument and from there can handle the requests
for POST we need to retrieve the information by accumulator the chunks of data that is sent 
with event listener request.on('data', (chunks) => data += chunks ) and request.on('end', (cb) => {cb(JSON.parse(data))}) 
the data is wrapped in an function so we can retrieve our data. 
*response.end() has to be called and only once for each request
