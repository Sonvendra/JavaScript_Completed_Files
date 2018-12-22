// DOM Manipulation
var h2Element = document.querySelector('h2');

// Good Morning
function sayGoodMorning() {
    h2Element.textContent = 'Good Morning';
}

// Good Afternoon
function sayGoodAfternoon() {
    h2Element.textContent = 'Good Afternoon';
}

// Good Evening
function sayGoodEvening() {
    h2Element.textContent = 'Good Evening';
}

// Good Night
function sayGoodNight() {
    h2Element.textContent = 'Good Night';
}

// WishMe Function
function wishMe(message,color) {
   h2Element.textContent = message;
   h2Element.style.backgroundColor = color;
   h2Element.style.boxShadow = '0 0 15px black';
}

// JavaScript DOM Event Listeners

// Good Morning Button
var goodMorningButton = document.querySelector('#gm');
goodMorningButton.addEventListener('click',function() {
    wishMe('Good Morning','lightblue');
});

// Good Afternoon Button
var goodAfternoonButton = document.querySelector('#ga');
goodAfternoonButton.addEventListener('click',function() {
    wishMe('Good Afternoon','lightgreen');
});

// Good Evening Button
var goodEveningButton = document.querySelector('#ge');
goodEveningButton.addEventListener('click',function() {
    wishMe('Good Evening','lightsalmon');
});

// Good Night Button
var goodNightButton = document.querySelector('#gn');
goodNightButton.addEventListener('click',function() {
    wishMe('Good Night','lightgray');
});

// Change the Image
var imageTag = document.querySelector('#myImage');
function changeImage(source) {
    imageTag.setAttribute('src',source);
}

// SMS App
var textAreaTag = document.querySelector('#myTextArea');
var spanTag = document.querySelector('#char-count');
var maxLength = 100;
textAreaTag.addEventListener('keyup',function() {
    var letters = textAreaTag.value.length;
    spanTag.textContent = maxLength - letters;
});