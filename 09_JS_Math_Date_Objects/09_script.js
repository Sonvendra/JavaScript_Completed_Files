/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log('piValue : ' + piValue);

// Math sqrt
var sqrt = Math.sqrt(256);
console.log('sqrt of 256 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(10,6546,544,97,9849,443,54654,8949,4191,94,91,35,16,189,9,4);
console.log('min : ' + min);

// find the Max of 4 numbers
var max = Math.max(10,6546,544,97,9849,443,54654,8949,4191,94,91,35,16,189,9,4);
console.log('max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 1000000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = today.toLocaleDateString();
console.log(date);

// Get the Time
var time = today.toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
today = new Date().getDay();
switch(today){
    case 0:
        output = 'Sunday';
        break;
    case 1:
        output = 'Monday';
        break;
    case 2:
        output = 'Tuesday';
        break;
    case 3:
        output = 'Wednesday';
        break;
    case 4:
        output = 'Thursday';
        break;
    case 5:
        output = 'Friday';
        break;
    case 6:
        output = 'Saturday';
        break;
    default:
        output = 'No - Day';
        break;
}
console.log(output);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */

var num1 = 100;
console.log(num1);

var minNumber = Number.MIN_VALUE;
console.log(minNumber);

var maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

var posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

var negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

// convert to String
num1 = 100;
console.log('value : ' + num1 + ' type ' + typeof num1);

var strNum = num1.toString();
console.log('value : ' + strNum + ' type ' + typeof strNum);

// convert a string to Number
var str = parseFloat('100');
console.log('value : ' + str + ' type ' + typeof str);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var msg = 'Good Morning';

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.charAt(0));
console.log(msg.length);
console.log(msg.substr(0,4)); // Good
console.log(msg.substr(5)); // Morning

// Reverse the String
msg = 'Good Morning';
function reverseStr(str) {
    var tempStr = '';
    for(var i = str.length-1 ; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log('RevString : ' + reverseStr(msg));

// count the Number of 'o'
msg = 'Good Morning';
function countZeros(str) {
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str.charAt(i) === 'o'){
            count++;
        }
    }
    return count;
}
console.log('Count : ' + countZeros(msg));

// Palindrome function
msg = 'ABCDCBA';
function isPalindrome(str) {
    return str === reverseStr(str);
}
console.log('isPalindrome : ' + isPalindrome(msg));


// Digital Clock
function digitalClock() {
    var today = new Date().toLocaleTimeString();
    document.querySelector('#time').textContent = today;
}
setInterval(digitalClock,1000);

// Example 1 : Triangle String
var theStr = 'NAVEEN SAGGAM';
function triangleString(str) {
    var tempString = '';
    for(var i=0; i<=str.length; i++){
        tempString += str.substr(0,i) + '\n';
    }
    return tempString;
}
console.log('Triangle String : ' + triangleString(theStr));

// Example 2 : Reverse Triangle
theStr = "NAVEEN SAGGAM";
function reverseTriangle(str) {
    var tempStr = '';
    for(var i=str.length; i>=0 ; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log('Reverse Triangle : ' + reverseTriangle(theStr));

// Example 3 : Mixed Triangle
theStr = 'NAVEEN SAGGAM';
function mixedTriangle(str) {
    var tempString = '';
    for(var i=0; i<=str.length; i++){
        tempString += str.substr(0,i) + '\n';
    }
    for(var j = str.length-1; j >= 0; j--){
        tempString += str.substr(0,j) + '\n';
    }
    return tempString;
}
console.log('Mixed Triangle : ' + mixedTriangle(theStr));

// Example 4: Display Word Number
strNum = '7897';
function displayWordNumber(str) {
    var tempString = '';
    for(var i = 0; i<str.length; i++){
        var digit = parseInt(str.charAt(i));
        switch(digit){
            case 0:
                tempString += ' ZERO ';
                break;
            case 1:
                tempString += ' ONE ';
                break;
            case 2:
                tempString += ' TWO ';
                break;
            case 3:
                tempString += ' THREE ';
                break;
            case 4:
                tempString += ' FOUR ';
                break;
            case 5:
                tempString += ' FIVE ';
                break;
            case 6:
                tempString += ' SIX ';
                break;
            case 7:
                tempString += ' SEVEN ';
                break;
            case 8:
                tempString += ' EIGHT ';
                break;
            case 9:
                tempString += ' NINE ';
                break;
            default:
                tempString += ' ';
                break;
        }
    }
    return tempString;
}
console.log(displayWordNumber(strNum));

// Example 5 : Get a String Number
strNum = '789';
var stringArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function getStringNumber(str) {
    var tempString = '';
    for(var i = 0; i<str.length ; i++){
        tempString += stringArray[str.charAt(i)] + ' ';
    }
    return tempString;
}
console.log(getStringNumber(strNum));

// Example 6 : Print Times Number
strNum = '123456789';
function printTimesNumber(str) {
    var  tempString = '';
    for(var i = 0; i<str.length; i++){
        var digit = parseInt(str.charAt(i));
        for(var j = 0; j < digit; j++){
            tempString += digit ;
        }
        tempString += '\n';
    }
    return tempString;
}
console.log('Times Number : ' + printTimesNumber(strNum));

// Example 7 : Palindrome String
var myString = 'ABCD';
function palindromeString(str) {
    var tempString = str;
    for(var i = str.length-2; i >=0 ; i--){
        tempString += str.charAt(i);
    }
    return tempString;
}
console.log(palindromeString(myString));

// Example 8 : Square String
var num = 15;
function squareString(num) {
    var tempString = '';
    for(var i = 0; i <=num ; i++){
        for(var j = 0; j< i; j++){
            tempString += '*';
        }
        tempString += '\n';
    }
    for(var k = num-1; k > 0; k--){
        for(var l = 0; l< k; l++){
            tempString += '*';
        }
        tempString += '\n';
    }
    return tempString;
}
console.log(squareString(num));