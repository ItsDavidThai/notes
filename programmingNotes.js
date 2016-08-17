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

// psuedoclassical
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

