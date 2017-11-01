// Set
// Set objects are collections of unique values (primitive or object refs)
// that you can iterate over

// // Create a set by using an array
// let myArray = [1, 2, 3, 3, 4, 4, 5];
// let mySet = new Set(myArray);
// console.log(mySet);





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

// WeakMap
