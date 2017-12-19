var arr = [0, 1, 2, 3, null, undefined, true];

arr['four'] = 4;

var innerArr = [100, 200]
arr[innerArr] = [5, 6]

delete arr[2];

console.log(arr);

// arr.forEach((el, i) => console.log(`forEach: i is ${i}, el is ${el}`));

// for (let i = 0; i < arr.length; i++) console.log(`for: i is ${i}, arr[i] is ${arr[i]}`);

// for (let i in arr) console.log(`for in: i is ${i}, arr[i] is ${arr[i]}`);

for (let value of arr) console.log(`for of: value is ${value}`);
// for of iterates over data that the iterable object defines to be iterated over
// so in an array, only those with numeric keys are iterated over
// it does not iterate over key 'four' or [100, 200]
// for of can terminate by use of break, continue, throw, return