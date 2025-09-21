/*
Primitive
----------
Their ar 7 types of primitive data types in JavaScript.
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

/*
Reference Type (Non-Primitive)
-------------------------------
1. Array
2. Object
3. Function
*/

// Array 
const heros = ["shaktiman" , "naagraj","doga"]

// Object 
let myObj={
    name:"kunal",
    age: 20,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//For refering to the Documentation of JavaScript
// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap Memory
//------------------------
// Stack (Primitive) 
// this will give you copy of the original value

// Heap (Non-Primitive) Memory
// this will give you reference of the original value

// Example of Stack Memory
//-------------------------
let myYoutubename = "kunalsainidotcom"
let anothername = myYoutubename
anothername = "kunalsaini"
console.log(anothername);
console.log(myYoutubename);


// Example of Heap Memory
//-------------------------
let userOne = {
    email : "user@google.com",
    upi : "user@hdfc"
}
let userTwo = userOne
userTwo.email = "kunal@google.com"
console.log(userOne);
console.log(userTwo);
