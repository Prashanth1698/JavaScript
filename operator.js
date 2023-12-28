let x = 10;


console.log(++x); //increment
console.log(--x); //decrement



let y = x + 2;
console.log(y);


let y = x - 2;
console.log(y);


let y = x * 2;
console.log(y);

let y = x / 2;
console.log(y);



//Comparison operator

let a = 5;

// Relational Operator
console.log(a<5);
console.log(a>5);
console.log(a<=10);
console.log(a>=5);

// Equality Operator
console.log(a === 5); 
console.log(a !== 5);

//String
console.log('Alex' < 'Ajio');

//comparision of different types
console.log('1' < 5);
console.log(false == 5);


//strict equality operator (datatype+value)
console.log(1 === 1); //number === number
console.log(2 == 1); // string === number

//lose equality operator

console.log(1 == 1);
console.log('1' == '2');
console.log(false == '1');

//terinery operator

let age = 25;

let type = age > 18 ? "Adult" : "child"

console.log(type);


//logical operator
//(&&) returns TRUE if both operands are TRUE

console.log(1 && 1);

//OR (||)
console.log(3 || 2);

let usercolor = "";
let defaultcolor = "yellow";
let customcolor = usercolor || defaultcolor
console.log("selected color:" + customcolor) ;

//bitwise operator

console.log(2 | 2);
console.log(1 & 2);


const readpermission = 4;
const writepermission = 2;
const executepermission = 1;

let mypermission = 0;

mypermission = mypermission | readpermission | writepermission;
let message = (mypermission & readpermission)? 'YES':'NO';
console.log(message);

//operator precedence

let p = 2 + 5 * 5; // based on prioritiesed it will run

let q = (2 + 5)*5; //based on normal process it will run

console.log(p,q);
