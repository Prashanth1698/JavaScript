let person = {
    name: "Prashanth",
    age: "25",
    gender: "male",
    isAlive: true, // Note:  boolean value
    address: "Coimbatore, TamilNadu, India",

    // here I'm using a sub-object to add additional data
    about: {
        college: "Karpagam College of Engineering",
        work: "Cloudiq Solution"
    }
}

// Dot notation to access the property
console.log(person.age);

// Bracket notation to access the property
console.log(person['name']);


//math object

let marks =[85,98,57,33]
let result = Math.max(...marks);
console.log("maximum marks:" + result);
