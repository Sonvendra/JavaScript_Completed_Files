let employee = ['John',40,'Manager'];

let eName = employee[0];
let eAge = employee[1];
let eDesg = employee[2];

console.log(`Name : ${eName} Age : ${eAge} Desg : ${eDesg}`);

// Destructing in ES6 version
let student = ['Rajan',22,'Engineering'];
let [sName,sAge,sCourse] = student; // Destructing
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);

// Swap between two variables
let a = 10;
let b = 20;
console.log(`Before : a : ${a} b: ${b}`);
[a , b] = [b , a];
console.log(`After : a : ${a} b: ${b}`);
