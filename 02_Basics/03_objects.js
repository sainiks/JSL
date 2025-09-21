// singleton
// singleton can be created with object literal only in js 
// Object.create()

// let nm = new object();
// 1. object literal
// 2. constructor function 
 


const mySym = Symbol("key2");// this is a symbol and it is how symbols are created 
// 1. object literal
const JsUser = {
    name: "kunal",
    "full name": "Kunal Saini",
    [mySym]:"key2",//this is a symbol and it is how symbols are used in documentation
    age: 20,
    location: "delhi",
    email: "kunalsaini20090360@gmail.com",
    isLoggedIn: false,
    lastlogindays:["monday","saturday"],
}

// 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]); // symbol
// console.log(JsUser[mySym]); // key2

JsUser.email = "kunalsaini@microsoft.com"

// Object.freeze(JsUser); // this will freeze the object and make it immutable

JsUser.email = "kunalsaini@google.com"
// console.log(JsUser); // 

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`); // "this" will refer to the object itself
    console.log(`Hello Js User, ${this.age}`); // "this" will refer to the object itself
}
console.log(JsUser.greeting()); // Hello Js User
console.log(JsUser.greetingtwo()); // Hello Js User, ${this.name}