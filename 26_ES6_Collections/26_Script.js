/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a Map of Technologies
let technologies = new Map().set('1','HTML')
                            .set('2','CSS')
                            .set('3','JavaScript')
                            .set('4','JQuery')
                            .set('5','Bootstrap')
                            .set('6','AJAX')
                            .set('7','Angular JS');

console.log(technologies);

// Get the value of a Key
let theValue = technologies.get('4');
console.log(theValue); // JQuery

// has()
console.log('Key : ' + technologies.has('9'));

//map.delete(key)
technologies.delete('7');
console.log(technologies);

// Size
console.log(`Size : ${technologies.size}`);

// map.keys
let output = '';
for(let key of technologies.keys()){
   output += key + ' ';
}
console.log('keys : ' + output);

// map.values
output = '';
for(let value of technologies.values()){
    output += value + ' ';
}
console.log('values : ' + output);

// map.entries()
output = '';
for(let entry of technologies.entries()){
    output += entry[0] + " => " + entry[1] + '\n';
}
console.log(output);


/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

// Create a Set
let languages = new Set().add('HTML')
                         .add('CSS')
                         .add('HTML')
                         .add('JavaScript')
                         .add('JQuery')
                         .add('JQuery')
                         .add('Bootstrap')
                         .add('Angular JS');
console.log(languages);

// set.delete(value)
languages.delete('Bootstrap');
console.log(languages);

// set.has(value)
console.log('Has Bootstrap ? :' + languages.has('Bootstrap'));

// Size
console.log('Size : ' + languages.size);

// clear
languages.clear();
console.log(languages);




