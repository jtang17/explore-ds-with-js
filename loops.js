var arr = [0, 1, 2, 3, null, undefined, true];

// Add non-numeric key (String)
arr['four'] = 4;

// Add non-numeric key (Array)
var innerArr = [100, 200];
arr[innerArr] = [5, 6];

// Add non-numeric key to prototype (Function)
Array.prototype.arrCustom = function() {};

// Add non-numeric, non-enumerable key (Symbol)
var mySymbol = Symbol('7');
arr[mySymbol] = 7;

// Delete value
delete arr[2];

console.log(arr); // [ 0, 1, empty, 3, null, undefined, true, four: 4, '100,200': [ 5, 6 ] ]
console.log(arr.length); // 7






/* FOR */
// for (let i = 0; i < arr.length; i++) console.log(`for: i is ${i}, arr[${i}] is ${arr[i]}`);
/*
  Iterates over: Typically numeric keys

  Notes with this example:
    Using numeric properties, it will not iterate over non-numeric keys
    such as 'four', [100, 200], or mySymbol.

  Use cases: Arrays, (Objects), Great when you need to use the index or specific pattern

  Termination: break, continue, throw, return
*/
// var weirdObj = {
//   'h': 0,
//   'hh': 1,
//   'hhh': 2,
//   'hhhh': 3
// };
// for (let i = 'h', counter = 0; counter < 5; i += 'h', counter++) console.log(weirdObj[i]);






/* FOR ... IN */
// for (let key in arr) console.log(`for in: key is ${key}, value is ${arr[key]}`);
/*
  Iterates over: Enumerable properties

  Notes with this example:
    Index 2 (or key 2) was deleted, it is now undefined, which is non-enumerable.
    Symbols are also non-enumerable, so the key mySymbol was not iterated over either.

  Use cases: Objects, (Arrays, Maps, Sets, Strings, TypedArray, arguments object)

  Termination: break, continue, throw, return
*/






/* FOR ... OF */
// for (let value of arr) console.log(`for of: value is ${value}`);
/*
  Iterates over: Data that the iterable object defines to be iterated over

  Notes with this example:
    In an array, only those with numeric keys are iterated over.
    Therefore, it did not iterate over the keys 'four', [100, 200],
    arrCustom, mySymbol.

  Use cases: Arrays, Maps, Sets, Strings, TypedArray, arguments object, (Objects), Great when you don't need the index

  Termination: break, continue, throw, return
*/







/* FOREACH */
// arr.forEach((el, i) => console.log(`forEach: i is ${i}, el is ${el}`));
/*
  Iterates over: Numeric keys

  Notes with this example:
    If the array at that index does not point to anything,
    it skips it. Therefore, index 2 is not printed.

  Use cases: Arrays

  Termination: Throw
*/