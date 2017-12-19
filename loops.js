var arr = [0, 1, 2, 3, null, undefined, true];

arr['four'] = 4;

var innerArr = [100, 200]
arr[innerArr] = [5, 6]

delete arr[2];

console.log(arr);

arr.forEach((el, i) => console.log(`forEach: i is ${i}, el is ${el}`));

for (let i = 0; i < arr.length; i++) console.log(`for: i is ${i}, arr[i] is ${arr[i]}`);

