// Get the HTML Elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButton = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divideButton = document.querySelector('#divide-button');
var multiplyButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

// Click event for Minus Button
minusButton.addEventListener('click',function() {
   operatorButton.textContent = minusButton.textContent;
});

// Click event for plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent = plusButton.textContent;
});

// Click event for Multiply Button
multiplyButton.addEventListener('click',function() {
    operatorButton.textContent = multiplyButton.textContent;
});

// Click event for divide Button
divideButton.addEventListener('click',function() {
    operatorButton.textContent = divideButton.textContent;
});

// Click event for Equals Button
equalsButton.addEventListener('click',function() {
   var firstNumber = firstNumberElement.value;
   var secondNumber = secondNumberElement.value;
   var operator = operatorButton.textContent;
   var result = 0;
   if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result;
   }
   else{
       resultButton.textContent = 'RESULT';
   }
});

// click event for Clear Button
clearButton.addEventListener('click',function() {
    firstNumberElement.value = '';
    secondNumberElement.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});