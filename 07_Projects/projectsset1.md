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
