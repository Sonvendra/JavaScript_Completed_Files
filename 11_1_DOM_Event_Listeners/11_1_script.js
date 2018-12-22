var theStr = 'NAVEENSAGGAM';
function triangleOne(str) {
    var tempStr = '';
    for(var i=0; i<=str.length; i++){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleOne(theStr));

function triangleTwo(str) {
    var tempStr = '';
    for(var i = 0; i<= str.length; i++){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangleTwo(theStr));

function triangleThree(str) {
    var tempStr = '';
    for(var i=str.length; i>=0; i--){
        tempStr += str.substr(0,i) + '\n';
    }
    return tempStr;
}
console.log(triangleThree(theStr));

function triangleFour(str) {
    var tempStr = '';
    for(var i = str.length-1 ; i>=0; i--){
        tempStr += addSpace(i) + str.substr(i) + '\n';
    }
    return tempStr;
}
console.log(triangleFour(theStr));

function triangleFive(str) {
    var tempStr = '';
    var  length = str.length;
    for(var i = 0; i<=length/2; i++){
        var num1 = length - (2 * i);
        tempStr += str.substr(0,i) + addSpace(num1) + str.substr(length-i) + '\n';
    }
    for(var j = length/2; j>=0; j--){
        var num2 = length - (2 * j);
        tempStr += str.substr(0,j) + addSpace(num2) + str.substr(length-j) + '\n';
    }
    return tempStr;
}
console.log(triangleFive(theStr));


function addSpace(num) {
    var tempSpace = '';
    for(var i=0; i<num;i++){
        tempSpace += ' ';
    }
    return tempSpace;
}

// Example 1 : TriangleOne
var triangleOneInput = document.querySelector('#triangleOne');
var triangleOnePara = document.querySelector('#triangleOneText');
triangleOneInput.addEventListener('keyup',function() {
    var inputText = triangleOneInput.value;
    triangleOnePara.textContent = triangleOne(inputText);
});

// Example 2 : TriangleTwo
var triangleTwoInput = document.querySelector('#triangleTwo');
var triangleTwoPara = document.querySelector('#triangleTwoText');
triangleTwoInput.addEventListener('keyup',function() {
    var inputText = triangleTwoInput.value;
    triangleTwoPara.textContent = triangleTwo(inputText);
});

// Example 3 : TriangleThree
var triangleThreeInput = document.querySelector('#triangleThree');
var triangleThreePara = document.querySelector('#triangleThreeText');
triangleThreeInput.addEventListener('keyup',function() {
    var inputText = triangleThreeInput.value;
    triangleThreePara.textContent = triangleThree(inputText);
});

// Example 4 : TriangleFour
var triangleFourInput = document.querySelector('#triangleFour');
var triangleFourPara = document.querySelector('#triangleFourText');
triangleFourInput.addEventListener('keyup',function() {
    var inputText = triangleFourInput.value;
    triangleFourPara.textContent = triangleFour(inputText);
});

// Example 5 : TriangleFour
var triangleFiveInput = document.querySelector('#triangleFive');
var triangleFivePara = document.querySelector('#triangleFiveText');
triangleFiveInput.addEventListener('keyup',function() {
    var inputText = triangleFiveInput.value;
    triangleFivePara.textContent = triangleFive(inputText);
});