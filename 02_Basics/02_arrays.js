const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "wonderwoman"];


// marvel_heros.push(dc_heros); //only push the array as a single element on the exsisting array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allheros = marvel_heros.concat(dc_heros); 
// combines the two arrays and returns a new array 
// console.log(allheros);


// const all_new_heros = [...marvel_heros , ...dc_heros];
// spread operator to spread the elements of an array into another array 
// this is the modern way to concatenate two or more arrays it modern and faster used in the industry
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // flat method to flatten the array and infinity to flatten all the nested arrays
console.log(real_another_array);


console.log(Array.isArray("kunal")); // to check it is an array or not
console.log(Array.from("kunal")); // to convert a string into an array
console.log(Array.from({name: "kunal"})); // to convert an object into an array also gives an empty array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // to convert multiple values into an array and also works with single value

