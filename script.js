function checkNumber()
 {
  
  var numberInput = document.getElementById("numberInput");

  var resultElement = document.getElementById("result");

  
  var number = parseFloat(numberInput.value);

  
  if (isNaN(number)) 
  {
    resultElement.innerText = "Please enter a valid number.";
  } else if (number > 0)
   {
    resultElement.innerText = "The number is positive.";
  } else if (number < 0)
   {
    resultElement.innerText = "The number is negative.";
  } else
   {
    resultElement.innerText = "The number is zero.";
  }
}
