const coding = ['js', 'ruby', 'java', 'pythono','cpp'];

coding.forEach( function (val){
    console.log(val);
})


// coding.forEach( (item) =>{
    // console.log(item);
// })


// function printme(item){
    // console.log(item);
// }
// coding.forEach(printme);

// coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
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
})


