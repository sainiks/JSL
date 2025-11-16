const coding = ['js', 'ruby', 'java', 'pythono','cpp'];

// normal function
// coding.forEach( function (val){
//     console.log(val);
// })

//arrow function
// coding.forEach( (item) =>{
//     console.log(item);
// })

// callback function
// function printme(item){
//     console.log(item);
// }

//  coding.forEach(printme);

// arrow function with index and array
// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })


const mycoding = [
    {
    langname: 'Javascript',
    langfilename: 'js',
},
    {
    langname: 'Java',
    langfilename: 'java',
},
    {
    langname: 'Python',
    langfilename: 'py',
},
]

mycoding.forEach ( (item ) => {
    console.log(item.langname);
    console.log(item.langfilename);
})