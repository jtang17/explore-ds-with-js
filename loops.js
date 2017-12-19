var arr = [0, 1, 2, 3, null, undefined, true];

arr['four'] = 4;

var innerArr = [100, 200]
arr[innerArr] = [5, 6]
Array.prototype.arrCustom = function() {};

var mySymbol = Symbol('7');
arr[mySymbol] = 7;

delete arr[2];

console.log(arr); // [ 0, 1, empty, 3, null, undefined, true, four: 4, '100,200': [ 5, 6 ] ]

/* FOR */
for (let i = 0; i < arr.length; i++) console.log(`for: i is ${i}, arr[${i}] is ${arr[i]}`);
/*
  Iterates over: Typically numeric keys

  Notes with this example:
    Using numeric properties, it will not iterate over non-numeric keys such as 'four', [100, 200], or mySymbol.

  Use cases: Arrays

  Termination: break, continue, throw, return
*/


/* FOR ... IN */
for (let key in arr) console.log(`for in: key is ${key}, value is ${arr[key]}`);
/*
  Iterates over: Enumerable properties

  Notes with this example:
    Index 2 (or key 2) was deleted, it is now undefined, so it was not iterated over which is not enumerable. Symbols are also non-enumerable, so the key mySymbol was not iterated over either.

  Use cases: Objects

  Termination:
*/


/* FOR ... OF */
  for (let value of arr) console.log(`for of: value is ${value}`);
    // for ... of iterates over data that the iterable object defines to be iterated over.
    // So in an array, only those with numeric keys are iterated over.
    // for ... of did not iterate over the keys 'four' or [100, 200].
    // for ... of can terminate by use of break, continue, throw, return.
    // It is great to use with iterables.

/* FOREACH */
// arr.forEach((el, i) => console.log(`forEach: i is ${i}, el is ${el}`));