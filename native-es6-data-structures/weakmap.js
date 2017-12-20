// WeakMap
// The WeakMap object is a collection of key/value pairs
// in which the keys are weakly referenced,
// meaning they can be garbage collected
// Keys must be Objects (Primitive data types are not allowed as keys)
// The values can be arbitrary values
// You must have the key to retrieve the value
// WeakMaps are not enumerable

let myWeakMap = new WeakMap();

let key1 = {
  id: 1
};

let flower1 = {
  flower: 'tulip',
  color: 'pink'
};

myWeakMap.set(key1, flower1);
console.log(myWeakMap);





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