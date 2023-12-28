//for loop
for(initialExpression;condition;step){
    console.log();
}
for (let a = 10; a>=1; a--){
    if(a % 2 !== 0){
        console.log("odd number #"+ a);
    }
}
//while loop
//while (condition) {
  // code block to be executed
//}
let b = 10;
while(b >=  1){
    if(b % 2 !== 0){
        console.log("odd number #" +b);
}
  b--;
}

//do{
//    (condition)
//} while(); 
let c = 10;
do{
   if(c % 2 !==0){
      console.log("do-while" +c); 
   }
}while(c <= 10);   

//for-in
let colors = ['Blue', 'Yellow', 'Pink']

for(let key in colors){
    console.log(key + ": ", colors[key]);
}

for(let col of colors){
    console.log("col: "+  colors);
}

//Enumerating properities of an object
const user = {
    name : 'Sergio',
    getFullname(){
        console.log(`My name is ${this.name}`);
    }
}
for (let key in user)
    console.log(key, user[key]);

for (let key of Object.keys(user))
    console.log(key);

for (let entry of Object.entries(user)) // it gives output with key and its value
    console.log(entry);

if ('age' in user){ // to check the objects is there or not 
    console.log("yes");
}

//cloneing object

let another = user;
console.log(another1);

let another = {}; // suppose there is a property inside another object 
for (let key in user){
    another2[key] = user[key];
}

let another = Object.assign({},user);
console.log(another); 

let another = Object.assign({}, user);
console.log(another);


//spread operator suppose we need to use the operator in someother place in code means simply we use spread operater
//let another = {... user}
