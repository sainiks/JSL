// const userEmail = []

// if(userEmail){
    // console.log("Got your email")
// }
    // else{
    // console.log("Don't have user email");
    // 
// }


// falsy values
// false , 0 , -0 ,bigInt 0n ,"" , null , undefined , NaN(not a number)

// truthy values
// "0", 'false'," ",[], {} , function(){} ,true , 1 , -1 , bigInt 1n , Symbol() , BigInt(0) , new Date() , Infinity

// if (userEmail.length ===0 ){
    // console.log("Array is empty");
// }

// const emptyobj = {}
// 
// if (Object.keys(emptyobj).length === 0 ){
    // console.log("Object is empty");
// }
// here Object.keys() returns an array of the object's own enumerable property names


// Nullish coalescing operator (??) >> null or undefined 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
// val1 = null ?? 10 ?? 20 
// console.log(val1);


// Ternary operator (?)
// ------------------------
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Ice tea is less than 80"):console.log("Ice tea is more than 80")
