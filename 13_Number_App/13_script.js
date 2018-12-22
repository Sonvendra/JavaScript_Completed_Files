// Get the HTML Elements
var numberInputElement = document.querySelector('#number');
var displayMessageElement = document.querySelector('#text-number');
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

numberInputElement.addEventListener('keyup',function() {
    var theNumber = numberInputElement.value;
    displayMessageElement.textContent = convertPalindromeWord(theNumber);
});

// function for Palindrome String
function convertPalindromeWord(strNum) {
    var tempNum = strNum;
    var tempStr = '';
    for(var i=strNum.length-2; i>=0 ; i--){
        tempNum += strNum.charAt(i);
    }
    for(var j=0; j<tempNum.length; j++){
        var digit = parseInt(tempNum.charAt(j));
        tempStr += numberArray[digit] + ' ';
    }
    return tempStr;
}
console.log(convertPalindromeWord('123'));