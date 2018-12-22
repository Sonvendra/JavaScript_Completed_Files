/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Object Creation
var fridge = {};
console.log(fridge);

// Add properties to Object
fridge.eggs = 20;
fridge.fruits = 40;
console.log(fridge);

// Object Literal
var mobile = {
    color : 'black',
    company : 'Lenovo',
    RAM : '4GB',
    Capacity : '32GB',
    isInsured : false
};

// Access the object
console.log(mobile);

// Access the properties
console.log('Company :' + mobile.company);

// Nested Objects
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        country : 'India'
    }
};

console.log(student);

// Access the nested Objects
console.log('City : ' + student.address.city); // dot notation
console.log('City : ' + student.address['city']); // [] notation

// Access the non Existing properties
console.log(student.dob); // undefined

// Add properties to an Object
student.dob = 'JAN-1989';
console.log(student);

// Add properties to Nested Object
student.address.state = 'Telangana';
console.log(student.address);

// Delete properties of n Existing Object
delete student.address;
console.log(student);

delete  student.dob;
console.log(student);


