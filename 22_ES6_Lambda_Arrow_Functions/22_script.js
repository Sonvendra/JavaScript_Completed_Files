let greet1 = function() {
    return "Good Morning";
};
console.log(greet1());

// Arrow Function
greet1 = () => `Good Morning`;
console.log(greet1());

let greetArgs = function(name) {
    return `Good Morning ${name}`
};
console.log(greetArgs('John'));

// Arrow Function
greetArgs = (name) => `Good Morning ${name}`;
console.log(greetArgs('John'));

let technologies = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];
let output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// Arrow Function
output = '';
technologies.forEach(t => output += `${t.toUpperCase()} `);
console.log(output);

// Reverse String
let theStr = 'Good Morning';
function reverseString(str) {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log(reverseString(theStr));

// Arrow Function
let reverseArrow = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseArrow(theStr));