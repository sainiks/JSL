// for loops

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 9 ){
//         console.log(`${i} is best number `)
//     }
//     console.log(element);   
// }
// console.log(element);

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value: ${j} and Inner loop: ${i}`);

//     }
    
// }
// for (let i = 1; i <= 20; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop : ${i}`);
    
//     for (let j = 1; j <= i; j++) {   
//         console.log(`Inner loop : ${j} and Outer loop : ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }    
// }
// 
// let myarray = ["flash" , "batman" , "superman"] 
// console.log(myarray.length)
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }




//  break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected  5");
//         break;
//     }
//     console.log(`value of index is : ${index}`); 
// }



for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected  5");
        continue;
    }
    console.log(`value of index is : ${index}`); 
}
