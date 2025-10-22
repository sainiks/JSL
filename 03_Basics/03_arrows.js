const user = {
    username : "kunal",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "saini";
// user.welcomemessage()


// console.log(this);// we are in a node environment that is why it referring empty context

// function chai (){ // regular function using "this"
    // let username = "kunal"
    // console.log(this.username);
// 
// }
// 
// chai()


const chai = () => { // arrow function using "this"
    let username = " kunal "
    console.log(this);
}
chai ()


// const addtwo = (num1 , num2)=>{
    // return num1 + num2 ; 
// }
// console.log(addtwo(3,4));


// const addtwo = (num1 , num2) =>  num1 + num2 ;// implcitly return
// console.log(addtwo(3,4));


// const addtwo = (num1 , num2) =>  (num1 + num2) ; // implict return with adding paranthesis
// console.log(addtwo(3,4));


const addtwo = (num1 , num2) =>  ({username : "kunal"}) ; // implict returning object wrapped in paranthesis
console.log(addtwo()); // { username: 'kunal' }



// const array = [2,5,3,7,8]
// array.forEach(function() {});
// array.forEach((element) => {});