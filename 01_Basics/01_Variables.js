<<<<<<< HEAD
// We are creating a variable called 'accountId'.
// 'const' means its value cannot be changed later.
// We set its value to 144553.
const accountId = 144553;

// We are creating a variable called 'accountEmail'.
// 'let' means we can change its value later if we need to.
// We set its value to an email address string.
let accountEmail = "kunalsaini20090360@gmail.com";

// We are creating a variable called 'accountPassword'.
// 'var' is an older way to create variables. It's usually better to use 'let' or 'const'.
// We set its value to "12345".
var accountPassword = "12345";

// Here, we are creating a variable 'accountCity' and setting it to "Jaipur".
// Notice we didn't use 'let' or 'var'. This can sometimes cause problems.
// It's safer to always use 'let', 'var', or 'const' to create variables.
accountCity = "Jaipur";

// We are creating a variable called 'accountState' using 'let'.
// We are not giving it a value yet. So, its value is 'undefined'.
=======
const accountId =144553
let accountEmail= "kunalsaini20090360@gmail.com"
var accountPassword= "12345"

accountCity ="Jaipur" 
// you can also reverse this type varibles in code without defineing it in the memmory

>>>>>>> c9fbc1d (refactor variable comments for clarity and consistency)
let accountState;

// If we try to change 'accountId', we will get an error because it's a 'const'.
// accountId = 2; // This line is a comment, so it won't run. It shows what would cause an error.

<<<<<<< HEAD
// We are changing the value of 'accountEmail'. This is okay because we used 'let'.
accountEmail = "poonam@gmail.com";

// We are changing the value of 'accountPassword'.
accountPassword = "98765";

// We are changing the value of 'accountCity'.
accountCity = "Delhi";

/*
  It's usually better not to use 'var'.
  'var' can sometimes be confusing because of how it works with different parts of your code (called scopes).
  'let' and 'const' are newer and make these things clearer.
*/

// This line will show all the variable values in a nice table in the output area (console).
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

=======
/* 
-----------------------------------------------------
Prefer not to use var
Because of issue in Block scope and functional scope 
-----------------------------------------------------
*/ 
>>>>>>> c9fbc1d (refactor variable comments for clarity and consistency)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);