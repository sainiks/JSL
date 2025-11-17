//.reduce method
// This method is used to reduce an array to a single value by applying a function to each
// element of the array, passing in an accumulator that is updated with each iteration.
// It takes two arguments: a callback function and an initial value for the accumulator.
// The callback function takes two arguments: the accumulator and the current value.
// The initial value is optional, and if not provided, the first element of the array is
// used as the initial value for the accumulator.
// The callback function is called for each element of the array, and the return value is
// used as the new value for the accumulator. The final value of the accumulator is returned
// as the result of the reduce method.
// const myNums = [1,2,3];
// const mytotal = myNums.reduce(function (acc , curval) {
    // console.log(`acc : ${acc} curval : ${curval}`);
    // 
    // return acc +curval;
// },0);

// const mytotal = myNums.reduce((acc , curval) => acc+curval,0)

// console.log(mytotal);


const shoppingCart = [
    {
    itemname :"JS Course",
    price : 2999,
    },
     {
    itemname :"PY Course",
    price : 999,
    },
    {
    itemname :"Mobile Dev Course",
    price : 5999,
    },
    {
    itemname :"Data Science  Course",
    price : 12999,
    },
]


const priceToPay = shoppingCart.reduce((acc,item) => (acc+item.price) ,0  )
console.log(priceToPay);