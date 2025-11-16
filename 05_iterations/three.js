
//Array Specific Loops

// for of loop
// ["" , "" , ""]
// [{}, {}, {}]


// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Hello World!";
// for (const greet of greetings) {
//     console.log(`Each character is : ${greet}`);
// }


// const greeting = "Hello World!";
// for (const greet of greeting) {
//     if(greet == ' '){
//         continue;  // Skip spaces
//     }
//     console.log(`Each character is : ${greet}`);
// }




//________________ Maps _________________
//
// Maps are iterable
// Maps store data in key value pair
// Maps maintain the order of insertion
// Duplicate keys are not allowed in maps
// Maps can have any data type as key or value

const map = new Map()

map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India');

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,":-", value);
// }

// maps are iterable, so we can use for of loop to iterate through them
// for of loop on maps gives key value pair in array format
// destructuring is used to get key and value from the array

const myobject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}// this is an object not a map

// we cannot use for of loop directly on objects
// we need to convert object into map or array to use for of loop

for( const [key , value ] of myobject){
    console.log(key, ':-', value);
}