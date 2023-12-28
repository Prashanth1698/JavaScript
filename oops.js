// object oriented programming
let person = {
    firstname : "Prashanth",
    lastname : "Ganesan",
    age : 25,
    address:{
        city: "coimbatore",
        state: "tamilnadu",
    },
    greeting: function(){
         
        let msg = `Hello I'm ${this.firstname}, ${this.lastname}`; 
         
        console.log(msg);

    }
};
console.log(person.address.city);
console.log(person.greeting);
