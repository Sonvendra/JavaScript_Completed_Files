// Get the HTML Elements
var userNameElement = document.querySelector('#username');
var emailElement = document.querySelector('#email');
var passwordElement = document.querySelector('#password');
var confirmPasswordElement = document.querySelector('#password_confirm');
var message = '';
// Get the Error Message Elements
var userErrorElement = document.querySelector('#name_error');
var emailErrorElement = document.querySelector('#email_error');
var passwordErrorElement = document.querySelector('#password_error');

// blur event for Username field
userNameElement.addEventListener('blur',function() {
    clearErrorMessage(userNameElement,userErrorElement);
});
// blur event for Email field
emailElement.addEventListener('blur',function() {
    clearErrorMessage(emailElement,emailErrorElement);
});
// blur event for Password field
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
// blur event for Confirm Password field
confirmPasswordElement.addEventListener('blur',function() {
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});

//form validation
function validate() {
    var isValid = true;

    // Required UserName Validation
    if(userNameElement.value === ''){
        isValid = false;
        message = 'UserName is Required';
        displayErrorMessage(userNameElement,userErrorElement,message);
        return isValid;
    }

    // UserName Length Validation
    if(userNameElement.value.length < 5){
        isValid = false;
        message = 'Required at least 5 letters';
        displayErrorMessage(userNameElement,userErrorElement,message);
        return isValid;
    }

    // RegExp Validation
    if(!userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        isValid = false;
        message = 'Pattern is not Matched';
        displayErrorMessage(userNameElement,userErrorElement,message);
        return isValid;
    }

    // Required Email Validation
    if(emailElement.value === ''){
        isValid = false;
        message = 'Email is Required';
        displayErrorMessage(emailElement,emailErrorElement,message);
        return isValid;
    }

    // Required Password Validation
    if(passwordElement.value === ''){
        isValid = false;
        message = 'Password is Required';
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        return isValid;
    }

    // Required Confirm Password Validation
    if(confirmPasswordElement.value === ''){
        isValid = false;
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        return isValid;
    }

    // Password Match Validation
    if(passwordElement.value !== confirmPasswordElement.value){
        isValid = false;
        message = "Passwords didn't Match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement,passwordErrorElement,message);
        return isValid;
    }

    if(!isValid){
        return false;
    }
    else{
        window.open('success.html');
        return true;
    }
}

// display Error Messages
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.borderColor = 'red';
    inputElement.style.boxShadow = '0 0 15px red';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// clear the Error messages
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.backgroundColor = 'white';
    inputElement.style.borderColor = 'gray';
    inputElement.style.boxShadow = '0 0 0px white';
    errorElement.textContent = '';
}