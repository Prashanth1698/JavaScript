//factoryfunction
function createPerson(name){

   return{
        name,
        age : 25,
        greeting: function(){
          console.log(`I'm ${this.name}`);
        }
    };
}
let Prashanth = createPerson("Prashanth");
Prashanth.greeting();

//construction function

function Person(name){
       
    this.name = name;
    this.greeting = function(){
        console.log(`I'm ${this.name}`);
    }
}
let person = new Person("Prashanth");
person.greeting();
