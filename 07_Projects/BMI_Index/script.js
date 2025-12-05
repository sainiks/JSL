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