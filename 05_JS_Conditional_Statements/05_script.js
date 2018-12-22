// If Else condition Example
var time = 89;
if(time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 24){
    console.log('Good Evening');
}
else{
    console.log('Please enter proper time');
}

// For loop Example to display from 1 - 100 values
var output = '';
for(var i = 1; i<= 10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);

// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while(i <= 10){
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10);
console.log(output);

// Switch Statement Example
output = '';
var today = new Date().getDay();
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