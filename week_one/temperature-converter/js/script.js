const celciusEl = document.getElementById('celsius');
const fahrenheitEl= document.getElementById('fahrenheit');



function updateFahrenheit(){
  const celsiusToFahrenheit = (celciusEl.value * 9/5) + 32;
  fahrenheitEl.value =celsiusToFahrenheit;
}
celciusEl.addEventListener('input',updateFahrenheit)





function updateCelcius(){
  const fahrenheitToCelcius =(fahrenheitEl.value - 32) / (9/5);
  
  celciusEl.value = fahrenheitToCelcius;
}

fahrenheitEl.addEventListener('input',updateCelcius);

