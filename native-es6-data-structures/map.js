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