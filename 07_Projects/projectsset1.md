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


#Project - 4 Solution

```javascript

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        IsValidateGuess(guess)
    })
}

function IsValidateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter a number more than 1')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GameOver , Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is TOOOOO Low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is TOOOOO High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" >Start New Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

```