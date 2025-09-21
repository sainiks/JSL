// arrays 
//  shallow copy , deep copy

const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman","naagraj"]
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr[5]);

// arrays methods 

// myarr.push(6) // add at last
// myarr.push(7) // add at last
// myarr.pop() // remove from last

// myarr.unshift(9) // add at start
// myarr.shift() // remove from start

// console.log(myarr.includes(9)); // true or false
// console.log(myarr.indexOf(3)); // 3

// const newarr= myarr.join() // convert array into string

// const newarr= myarr.reverse() // reverse the array

// const newarr= myarr.concat(myheros) // merge two arrays

// const newarr= myarr.sort() // sort the array in ascending order
 
// console.log(myarr);
// console.log(newarr);

// slice , splice 
// slice - it will create new array and will not change the original array
// splice - it will create new array but will change the original array 

console.log("A ",myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log("C ",myarr);
console.log(myn2);

