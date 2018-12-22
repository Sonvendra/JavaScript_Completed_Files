/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Simple Function
// Function declaration
function greet() {
    console.log('Iam From Greet Function');
}
// call the function / function execution
greet();

// function with args
function sum(a , b) {
    var sum  = a + b;
    console.log('the Sum of a , b is : ' + sum);
}
sum(10,20);

// function with less Args
function greetLessArgs(name , age) {
    console.log('Hello ' + name + ' You Are ' + age + ' Years Old!');
}
greetLessArgs('John');

// Function with More Args
function greetMoreArgs(name , age) {
    console.log('Hello ' + name + ' You Are ' + age + ' Years Old!');
}
greetLessArgs('John',30,'Manager');

// Function with return Types
function greetReturn(name,age) {
    var greeting = 'Hello ' + name + ' You Are ' + age + ' Years Old!';
    return greeting;
}
greetReturn('John',40);

// Function Expression
var greetFn = function () {
    return "Good Morning From Function Expression";
};
var greetMsg = greetFn();
console.log(greetMsg);

// Functions as a parameter to other function
function greet1(name) {
    console.log('Iam From Greet 1 ' + name);
}
function greet2(name) {
    console.log('Iam From Greet 2 ' + name);
}
function greetCaller(fName,name) {
    fName(name);
}
greetCaller(greet1,'John');

// Functions as parameter with function Expressions
var greetFn1 = function(name) {
  console.log('GreetFn 1 ' + name);
};
var greetFn2 = function(name) {
    console.log('GreetFn 2 ' + name);
};
var greetFnCaller = function(fName,name) {
    fName(name);
};
greetFnCaller(greetFn1,'John');

// Nested Functions
function outerFn() {

    console.log('Iam from OuterFn');

    function innerFn() {
        console.log('Iam from innerFn');
    }
    innerFn();
}
outerFn();

// functions inside an Object
var car = {
    color : 'white',
    fuel : 'Diesel',
    model : 'Rolls Royce',
    capacity : '5000cc',
    specification : function() {
        var spec = 'Color : ' + this.color + ' ' +
                    'Fuel : ' + this.fuel  + ' '  +
                    'Model : ' + this.model  + ' '  +
                    'Capacity : ' + this.capacity  + ' '  ;
        return spec;
    }
};

var carSpec = car.specification();
console.log(carSpec);

// Functions inside an Nested Object
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return state.toLowerCase().trim() === this.address.state.toLowerCase().trim();
    }
};
var isFromTelangana = student.isFromState(' TELANGANA ');
console.log('isFromTelangana : ' + isFromTelangana);