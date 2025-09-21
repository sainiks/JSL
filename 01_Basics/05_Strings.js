const name = "kunal"
const repoCount = 50

// console.log(name + repoCount + " Value"); 
// This is old way of doing things in JavaScript we don't perfer this way

console.log(`My name is ${name} and my repo count is ${repoCount} `); 
// This is the new way of doing things in JavaScript we perfer this way
// This method is called string interpolation


const gameName = new String('kunal-ks-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// 
// 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)// here last index is not included 
console.log(newString);

const anotherString = gameName.slice(-7,4)// here last index is not included it can take negative index also 
console.log(anotherString);

const newStringOne = "   kunal   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kunal.com/kunal%20saini"

console.log(url.replace('%20','-'));
console.log(url.includes('kunal'));
console.log(url.includes('aashi'));


console.log(gameName.split('-'));

const str1 = "Kunal"
const str2 = "Saini"

console.log(str1.concat(" ",str2))
console.log(str2.concat(" ",str1))