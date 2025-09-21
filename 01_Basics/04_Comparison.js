// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*

The reason is that an equality check == and 
comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > O is false.

*/
// console.log(undefined == 0 );
// console.log(undefined > 0 );
// console.log(undefined < 0 );

//try to avoid these kinds of comparisons to write clean code

// Now using strict check
// strict check is done using " === " and " !== "
// in strick check your value and type both should be same

// For example 1:
// "2" is string and and 2 is number so it will give you return false
// console.log("2" === 2);

// For example 2:
score = "3"
console.log("3" === score);
// "3" is string and and score stores the value of 3 as a string so it will give you return true