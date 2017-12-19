var myCoolArr = [0, 1, 2, 3, null, undefined, true];

myCoolArr['four'] = 4;

var semiArr = [100, 200]
myCoolArr[semiArr] = [5, 6]

delete myCoolArr[2];

console.log(myCoolArr);

myCoolArr.forEach((el, i) => console.log(`forEach: i is ${i}, el is ${el}`));
