#project related to DOM

#project link
[click here]

#Project - 1
#Solution code 
```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event_object){
        console.log(event_object)
        console.log(event_object.target)
        if(event_object.target.id === "grey"){
            body.style.backgroundColor= event_object.target.id
        } 
        if(event_object.target.id === "white"){
            body.style.backgroundColor= event_object.target.id
        } 
        if(event_object.target.id === "blue"){
            body.style.backgroundColor= event_object.target.id
        } 
        if(event_object.target.id === "yellow"){
            body.style.backgroundColor= event_object.target.id
        } 
        if(event_object.target.id === "purple"){
            body.style.backgroundColor= event_object.target.id
        } 
    })
});

```


#Project - 2 Solution
```javascript

const form = document.querySelector("form")
// this usecase will give empty values
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(event_object){
    event_object.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML= `Please give a valid height ${height}`;
    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML= `Please give a valid weight ${weight}`;
    }else {
      const bmi =(weight/((height*height)/10000)).toFixed(1)
    //   results.innerHTML= `<span>${bmi}</span>`
      if(bmi <= 18.6){
        results.innerHTML= `<span>You are Under Weight,\nYour BMI is ${bmi}</span>`
      }
      else if (bmi >= 18.6 && bmi<= 24.9){
        results.innerHTML= `<span>You are Normal,\nYour BMI is ${bmi}</span>`
      }
      else{
        results.innerHTML= `<span>You are Over Weight,\nYour BMI is  ${bmi}</span>`
      }
    }
});

```


#Project - 3 Solution

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)
```