// if 
const isUserLoggedIn = true
const temp = 41
if(isUserLoggedIn){
    // code to be executed if condition is true
}
// < , > , <= , >= , == , === , != , !==

// if else
// if(condition){
    // code to be executed if condition is true
// }else{
    // code to be executed if condition is false
// }


// if(temp === 40 ){
    // console.log("less than 50");
// }
// else {
    // console.log("temperature is greater than 50");
// }
// console.log("this will always run");


// const score = 200
// if (score > 100) {
    // let power = "fly"
    // console.log(`User power : ${power}`);   
// }
// console.log(`User score : ${power}`); // ReferenceError: power is not defined


// const balance =1000
// if(balance > 500 ) console.log("test ");// implicit scope it executes only in one line 

// if (balance < 500 ){
    // console.log("less than 500");
// }else if (balance < 750){
    // console.log("less than 750");
// }else if (balance < 900){
    // console.log("less ");
// }else {
    // console.log("less than 1200");
// }



const userLoggedIn = true 
const debitCard =true
const loggedInFromGoogle = false 
const loggedInFromEmail = true 

if(userLoggedIn && debitCard ){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in  ...");
}