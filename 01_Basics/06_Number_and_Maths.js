const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(5 - 5);
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6)); // It only round off the given number
// console.log(Math.ceil(4.6)); // It uses the higher value in roundoff
// console.log(Math.floor(4.6)); // It uses the lower value in roundoff
// console.log(Math.min(4,3,6,8)); // It uses the lower value in roundoff
// console.log(Math.max(4,3,6,8)); // It uses the lower value in roundoff


// console.log(Math.random()); // It always gives values between 0 and 1

// console.log((Math.random()*10) + 1); // It always gives values between 1 and 10 to avoid 0 point values

// console.log(Math.floor(Math.random()*10) + 1); // It always gives values between 1 and 10 to avoid 0 point values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1) )) // Here to get the values between 10 and 20 i have to add 1 to
// max and min and then subtract min from max and then multiply with random and
// then use floor to get the integer value between 10 and 20