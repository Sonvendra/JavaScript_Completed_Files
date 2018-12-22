// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);
console.log('Exising : ' + array[1]); // 20


// Access not existed property from an array
console.log('Non Existing : ' + array[100]); // undefined


// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log('Length : ' + array.length);

// reverse the array using reverse()
var technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.reverse();
console.log('After : ' + technologies);

// Remove the first value of the array: shift()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.shift();
console.log('After : ' + technologies);

// Add value to front of the array:unshift()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.unshift('Bootstrap');
console.log('After : ' + technologies);

// Remove the last value of the array: pop()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.pop();
console.log('After : ' + technologies);

// Add value the end of the array: push()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.push('Bootstrap');
console.log('After : ' + technologies);

// Remove an element from an Array , Arguments: colors.splice(pos,n):

// splice(index)
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(1);
console.log('After : ' + technologies);

// splice(index,noOfElements)
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(1,1);
console.log('After : ' + technologies);

// splice(index,1,replaceElement)
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(1,1,'Bootstrap');
console.log('After : ' + technologies);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice(); // creates new copy
arr1.splice(2);
console.log('Array 1 : ' + arr1);
console.log('Array 2 : ' + arr2);

// indexOf()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log(technologies[0]); // HTML
console.log(technologies.indexOf('Bootstrap')); // 0

// Example of IndexOf
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
var value = 'Bootstrap';
if(technologies.indexOf(value) === -1){
    console.log('The ' + value + ' is not Exists');
}
else{
    console.log('The ' + value + ' is exists @ ' + technologies.indexOf(value));
}

// Join()
array = [10,20,30,40,50];
var str = array.join(' - ');
console.log(str);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Looping through the array
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];

// using normal for-loop
var output = '';
for(var i = 0; i<technologies.length; i++){
    output += technologies[i] + ' ';
}
console.log(output);

// using for-in loop ES5
output = '';
for(var index in technologies){
    output += technologies[index] + ' ';
}
console.log(output);


// using forEach Loop in ES5
output = '';
technologies.forEach(function (element) {
    output += element + ' ';
});
console.log(output);