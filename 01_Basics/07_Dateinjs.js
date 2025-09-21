// Dates 
// 1st jan 1970 00:00:00 UTC

let myDate = new Date()
// console.log(myDate.toString());
// Fri Jun 14 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
// Fri Jun 14 2024

// console.log(myDate.toISOString());
// 2024-06-14T12:34:56.789Z

// console.log(myDate.toJSON());
// 2024-06-14T12:34:56.789Z

// console.log(myDate.toLocaleDateString()); 
// 6/14/2024

// console.log(myDate.toLocaleString());
// 6/14/2024, 12:34:56 PM

// console.log(typeof myDate); 
// object


// let myCreatedDate = new Date (2023, 0, 23)
// let myCreatedDate = new Date (2023, 0, 23 ,5 ,3 )
let myCreatedDate = new Date ("11-02-2005" )
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time is ${newDate.getHours()}'

newDate.toLocaleString('default',{
    weekday:"long",
    
})