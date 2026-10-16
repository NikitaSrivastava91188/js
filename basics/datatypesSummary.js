
//data types categorizes int 2 types on he basis of how data is stored in memory and how it is accessed.
//primitive and nonPrimitive

// 1. Primitive data type
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// 2. Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);


// https://262.ecma-international.org/5.1/#sec-11.4.3






/// **************************** memory ********************************

/*
memory can be classified into 2 types
stack and heap
the primitive data types uses stack memory and non primitive data uses heap memory.

when any variable uses stack memory that time copy/instnce of that variable is chnages when we do any changes but when variable uses heap memory then refrence of that vrible is used. 


understand it by an example
let name = "Nikita"
let anotherName = name
anotherName = "Srivastava"
console.log(name);
console.log(anotherName);

this data type is primitive so its uses stack memory


let user = {
    email : "nikita@gmail.com",
    name  : "nikita",
    age : 22
}

let userTwo = user
userTwo.email = "nikki@gamil.com"
console.log(user.email);
console.log(userTwo.email);
this data type is non primitive so it uses heap memory.

*/

let name = "Nikita"
let anotherName = name
anotherName = "Srivastava"
console.log(name);
console.log(anotherName);


let user = {
    email : "nikita@gmail.com",
    name  : "nikita",
    age : 22
}

let userTwo = user
userTwo.email = "nikki@gamil.com"
console.log(user.email);
console.log(userTwo.email);

