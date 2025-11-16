// Switch_Syntax :-

// switch (key) {
    // case value:
        // 
        // break;

    // default:
        // break;
// }


//Switch :- 
// 1. It is used to execute one block of code among many alternatives.
// 2. It is a better alternative to using multiple if-else statements.
// 3. It is used when we have multiple conditions to check.
// 4. It is used when we have multiple values to check for a single variable.

const month = "march"
switch (month){
    case "january" :
        console.log("January");
        break;
    case "feburary" :
        console.log("feburary");
        break;
    case "march" :
        console.log("March");
        break;
    case "april" :
        console.log("April");
        break;       
    default : 
        console.log("default case match");
        break;
}