let technologies = ['HTML','CSS','JavaScript','Bootstrap','Angular JS'];

// Normal for-loop ES5
let output = '';
for(let i=0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// ForEach loop ES5
output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// For-in Loop ES5
output = '';
for(let index in technologies){
    let element = technologies[index];
    output += `${element.toUpperCase()} `;
}
console.log(output);

// For-Of Loop ES6
output = '';
for(let element of technologies){
    output += `${element.toUpperCase()} `;
}
console.log(output);

