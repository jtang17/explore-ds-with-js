// Set
// Set objects are collections of unique values (primitive or object refs)
// that you can iterate over

// Create a set by using an array
let myArray = [1, 2, 3, 3, 4, 4, 5];
let mySet = new Set(myArray);
console.log(mySet);





// // Add to the set
// mySet.add('6');
// console.log(mySet);





// // Add object to the set
// let myObj = {
//   a: 7,
//   b: 8
// };
// mySet.add(myObj);
// console.log(mySet);





// // Add same object ref to set
// mySet.add(myObj);
// console.log(mySet);
// // It does not add it because it has unique values or references





// // Add a look alike object
// mySet.add({
//   a: 7,
//   b: 8
// });
// console.log(mySet);





// // Delete a value
// mySet.delete('6');
// console.log(mySet);





// mySet.delete({
//   a: 7,
//   b: 8
// });
// console.log(mySet);





// mySet.delete(myObj);
// console.log(mySet);





// console.log(mySet.has(10));
// console.log(mySet.has(1));





// console.log(mySet.size);





// // This returns a new iterator obj that contains an array of [value, value]
// // for each element in the Set obj retaining insertion order
// console.log(mySet.entries());





// // This returns a new iterator obj that contains values for each element
// // in the Set obj retaining insertion order
// console.log(mySet.keys());





// // This returns a new iterator obj that contains values for each element
// // in the Set obj retaining insertion order
// console.log(mySet.values());





// // Ways to iterate
// mySet.forEach(function(val) {
//   console.log(val);
// });

// for (let [key, value] of mySet.entries()) console.log(key);

// for (let item of mySet) console.log(item);

// for (let item of mySet.keys()) console.log(item);

// for (let item of mySet.values()) console.log(item);





// // convert Set object to an Array object
// var myNewArray = Array.from(mySet);
// console.log(myNewArray);

// console.log([...mySet]);





// // Empty out your set
// mySet.clear();
// console.log(mySet);





// Map
// Map objects are collections of unique key-values
// (primitive or object refs) that you can iterate over

// let myMap = new Map([
//   ['a1', 'Hello'],
//   ['b2', 'Hola']
// ]);
// console.log(myMap);





// // Insert
// myMap.set('c3', 'Hallo');
// console.log(myMap);

// myMap.set('c3', 'Hallo');
// console.log(myMap);

// myMap.set('c3', 'Bonjour');
// console.log(myMap);





// console.log(myMap.has('d4'));
// console.log(myMap.has('a1'));





// console.log(myMap.get('a1'));





// // Delete by using key
// myMap.delete('a1');
// console.log(myMap);





// // Get size of myMap
// console.log(myMap.size);





// // This returns a new iterator obj that contains an array of [key, value]
// // for each element in the Map obj retaining insertion order
// console.log(myMap.entries());





// // This returns a new iterator obj that contains keys for each element
// // in the Map obj retaining insertion order
// console.log(myMap.keys());





// // This returns a new iterator obj that contains values for each element
// // in the Map obj retaining insertion order
// console.log(myMap.values());





// // Ways to iterate
// myMap.forEach(function(value, key) {
//   console.log(key + ' = ' + value);
// });

// for (var [key, value] of myMap) {
//   console.log(key + ' = ' + value);
// }

// for (var [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value);
// }

// // Keys only
// for (var key of myMap.keys()) {
//   console.log(key);
// }

// // Values only
// for (var value of myMap.values()) {
//   console.log(value);
// }





// // Convert Map object to an Array object
// console.log(Array.from(myMap));

// // Convert Map object to an Array object of keys only
// console.log(Array.from(myMap.keys()));





// // Empty out map
// myMap.clear();
// console.log(myMap);





// WeakSet
// WeakSets are collections of unique objects only
// An object in the WeakSet may only occur once
// They weakly hold objects, meaning that if there is no
// other reference to an object stored in the WeakSet
// they can be garbage collected
// There is no list of current objects stored in the collection
// WeakSets are not enumerable

// let myWeakSet = new WeakSet();

// let objA = {
//   color: 'red',
// };

// myWeakSet.add(objA);
// console.log(myWeakSet);





// myWeakSet.add(objA);
// console.log(myWeakSet);





// let objB = {
//   color: 'orange'
// };
// myWeakSet.add(objB);
// console.log(myWeakSet);





// myWeakSet.add({
//   color: 'yellow'
// });
// console.log(myWeakSet);





// // Get the size
// console.log(myWeakSet.length);





// // Check if it has a value
// console.log(myWeakSet.has(objB));





// console.log(myWeakSet.has({color: 'orange'}));





// // Delete
// myWeakSet.delete(objB);
// console.log(myWeakSet);





// myWeakSet.delete({color: 'yellow'});
// console.log(myWeakSet);





// WeakMap
// The WeakMap object is a collection of key/value pairs
// in which the keys are weakly referenced,
// meaning they can be garbage collected
// Keys must be Objects (Primitive data types are not allowed as keys)
// The values can be arbitrary values
// You must have the key to retrieve the value
// WeakMaps are not enumerable

// let myWeakMap = new WeakMap();

// let key1 = {
//   id: 1
// };

// let flower1 = {
//   flower: 'tulip',
//   color: 'pink'
// };

// myWeakMap.set(key1, flower1);
// console.log(myWeakMap);





// let key2 = {
//   id: 2
// };

// let flower2 = {
//   flower: 'rose',
//   color: 'white'
// };

// myWeakMap.set(key2, flower2);
// console.log(myWeakMap);





// myWeakMap.set(key2, flower2);
// console.log(myWeakMap);





// // Check if it has a value
// console.log(myWeakMap.has(key2));





// console.log(myWeakMap.has({id: 2}));





// // Get a value
// console.log(myWeakMap.get(key2));





// // Get the size (MDN)
// console.log(myWeakMap.length);





// myWeakMap.delete(key1);
// console.log(myWeakMap);