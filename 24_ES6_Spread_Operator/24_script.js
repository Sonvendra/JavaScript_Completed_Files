// Find the max of few Number

let numberArray = [1,6546,168,61,3513,486498,41,6,86461,61,681,3134];
let maxNumber = Math.max(...numberArray);
console.log(`maxNumber : ${maxNumber}`);

// Add an array  in the middle of some other array
let array1 = [40,50,60];
let array2 = [10,20,30,...array1];
let array3 = [...array2,70,80,90,100];
console.log(array3);

// Create a Copy of an Array
let arr1 = ['HTML','CSS','JavaScript','JQuery'];
let arr2 = arr1.slice(); // to create a new copy
arr2 = [...arr1]; // to create a new copy
console.log(arr2);