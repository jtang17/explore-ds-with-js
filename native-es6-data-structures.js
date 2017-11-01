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

// for (let item of mySet) console.log(item);

// for (let item of mySet.keys()) console.log(item);

// for (let item of mySet.values()) console.log(item);

// for (let [key, value] of mySet.entries()) console.log(key);

// // convert Set object to an Array object
// var myNewArray = Array.from(mySet);
// console.log(myNewArray);

// console.log([...mySet]);

// // Empty out your set
// mySet.clear();
// console.log(mySet);

// Map

// WeakSet

// WeakMap
