function createPerson(name){

    return{
         name,
         age : 25,
         greeting: function(){
             console.log(`I'm ${this.name}`);
         }
     };
 }
