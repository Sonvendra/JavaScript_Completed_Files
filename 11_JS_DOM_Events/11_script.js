// form Logic
var submitButton = document.querySelector('#submit');
var userNameElement = document.querySelector('#user');
var passwordElement = document.querySelector('#pass');
var userTextElement = document.querySelector('#user-text');
var passTextElement = document.querySelector('#pass-text');
submitButton.addEventListener('click',function() {
    userTextElement.textContent = userNameElement.value;
    passTextElement.textContent = passwordElement.value;
});

// Keyup Event for UserName
userNameElement.addEventListener('keyup',function() {
    var username = userNameElement.value;
    if(username === 'naveen'){
        userNameElement.style.backgroundColor = 'lightgreen';
        userNameElement.style.borderColor = 'green';
        userNameElement.style.boxShadow = '0  0 15px green';
    }
    else{
        userNameElement.style.backgroundColor = 'lightsalmon';
        userNameElement.style.borderColor = 'red';
        userNameElement.style.boxShadow = '0  0 15px red';
    }
    userTextElement.textContent = username;
});

// keyup event for Password
passwordElement.addEventListener('keyup',function() {
    passTextElement.textContent = passwordElement.value;
});